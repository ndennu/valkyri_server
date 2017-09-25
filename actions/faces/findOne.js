module.exports = (api) => {
    
    return (req, res) => {
        var spawn = require("child_process").spawn;
        var process = spawn('python3',["modules/valkyri_face_py", "-m", req.params.id]);

        process.stdout.on('data', function (data){
            // data is a buffer
            res.status(200).send(data.toString('utf8'));
        });
    };
};