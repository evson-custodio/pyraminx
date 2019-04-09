function getIpAddress(interface) {
    const os = require('os');
    let address;

    os.networkInterfaces()[interface].forEach(netInfo => {
        if (netInfo.family === 'IPv4') {
            address = netInfo.address;
        }
    });

    return address;
}

function configureServer(port) {
    const app = require('./config/express')();
    const server = require('http').createServer(app);

    // Loopback Pseudo-Interface 1
    // Ethernet
    // Wi-Fi
    // eth0
    // wlan0
    server.listen(process.env.PORT || port, () => {
        console.log('Server running on http://%s:%d', server.address().address, port);
    });
}

// if (process.argv[1].endsWith('server.js')) {
//     if (process.argv.length == 2) {
//         configureServer(1024 + process.pid);
//     } else if (process.argv.length > 2) {
//         configureServer(process.argv[2]);
//     }
// }

configureServer(3000);

module.exports = configureServer;