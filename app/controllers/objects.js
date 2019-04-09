const fs = require('fs');
const path = require('path');

module.exports = () => {
    return {
        getObjectByFilename: (req, res) => {
            // process.send({id: process.env.id, cmd: 'notifyRequest'});
            fs.readFile(path.join(__dirname, '../objects/', req.params.filename + '.js'), 'base64', (err, data) => {
                res.status(200).send(data);
            });
        }
    }
}