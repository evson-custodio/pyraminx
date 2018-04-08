function configureCluster(port) {
    const cluster = require('cluster');
    const os = require('os');

    const cpus = os.cpus();

    if (cluster.isMaster) {
        console.log('Master %d is running', process.pid);

        for (const i in cpus) {
            cluster.fork({id: Number.parseInt(i) + 1});
        }

        cluster.on('listening', (worker, address) => {
            console.log('Worker[%d] %d is now connected to %d', worker.id, worker.process.pid, address.port);
        });

        cluster.on('exit', (worker, code, signal) => {
            console.log('Worker[%d] %d died (%s). Restarting...', worker.id, worker.process.pid, signal || code);
            cluster.fork();
        });

        function messageHandler(msg) {
            if (msg.id && msg.cmd && msg.cmd === 'notifyRequest') {
                let worker = cluster.workers[msg.id];
                worker.requests++;
                console.log('Worker[%d] %d total requests: %d', worker.id, worker.process.pid, worker.requests);
            }
        }

        for (const id in cluster.workers) {
            cluster.workers[id].requests = 0;
            cluster.workers[id].on('message', messageHandler);
        }

    } else {
        console.log('Worker[%d] %d is started', process.env.id, process.pid);
        require('./server')(port);
    }
}

if (process.argv[1].endsWith('cluster.js')) {
    if (process.argv.length == 2) {
        configureCluster(1024 + process.pid);
    } else if (process.argv.length > 2) {
        configureCluster(process.argv[2]);
    }
}

module.exports = configureCluster;