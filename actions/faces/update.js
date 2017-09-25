module.exports = (api) => {
    
    return (req, res) => {
        var spawn = require("child_process").spawn;
        var process = spawn('python3',["modules/valkyri_face_py", "-u", req.params.id, req.file.path]);

        process.stdout.on('data', function (data){
            // data is a buffer
            res.status(200).send(data.toString('utf8'));
        });
    };
};