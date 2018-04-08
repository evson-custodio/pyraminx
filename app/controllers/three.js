const fs = require('fs');
const path = require('path');
module.exports = () => {
    return {
        getExampleByFilename: (req, res) => {
            process.send({id: process.env.id, cmd: 'notifyRequest'});
            fs.readFile(path.join(__dirname, '../../node_modules/three/examples/js/', req.params.filename + '.js'), 'base64', (err, data) => {
                res.status(200).send(data);
            });
            // res.status(200).sendFile(path.join(__dirname, '../../node_modules/three/examples/js/', req.params.filename + '.js'));
        },
        getConstrolByFilename: (req, res) => {
            process.send({id: process.env.id, cmd: 'notifyRequest'});
            fs.readFile(path.join(__dirname, '../../node_modules/three/examples/js/controls/', req.params.filename + '.js'), 'base64', (err, data) => {
                res.status(200).send(data);
            });
        },
        getLibsByFilename: (req, res) => {
            process.send({id: process.env.id, cmd: 'notifyRequest'});
            fs.readFile(path.join(__dirname, '../../node_modules/three/examples/js/libs/', req.params.filename + '.js'), 'base64', (err, data) => {
                res.status(200).send(data);
            });
        }
    }
}