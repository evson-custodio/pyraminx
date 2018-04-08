const fs = require('fs');
const path = require('path');
module.exports = () => {
    return {
        getThreeJS: (req, res) => {
            process.send({id: process.env.id, cmd: 'notifyRequest'});
            fs.readFile(path.join(__dirname, '../../node_modules/three/build/three.js'), 'base64', (err, data) => {
                res.status(200).send(data);
            });
        }
    }
}