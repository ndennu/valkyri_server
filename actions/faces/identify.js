module.exports = (api) => {
    const History = api.models.History;
    const Access = api.models.Access;
    const Place = api.models.Place;
    const User = api.models.User;

    return (req, res) => {


        var spawn = require("child_process").spawn;
        var process = spawn('python3',["modules/valkyri_face_py", "-i", req.file.path]);

        process.stdout.on('data', function (data){
            // data is a buffer
            let idUser = Number(data.toString('utf8'));
            // Get the place id
            let place = null;
            Place
            .findById(req.params.idPlace)
            .then((place) => {
                
                if(place === null) {
                    res.status(404).send("Place not found");
                }
                // Get the access detail
                Access
                .findOne({where:{"place_id": place.id}})
                .then((access) => {             
                    if(access === null) {
                        checkLevel(place, idUser);
                    } else {
                        let actualDate = new Date();
                        let actualTime = actualDate.getHours() + ":" + actualDate.getMinutes() + ":00";

                        if(access.h1 < actualTime && access.h2 > actualTime){
                            checkLevel(place, idUser);
                        } else {
                            res.status(401).send();
                        }
                    }
                }).catch(error);
            })
            .catch(error);
        });

        function checkLevel(place, userId) {
            User
            .findById(userId)
            .then((user) => {
                if(user != null) {
                    if(user.level_number <= place.level_number) {
                        History
                        .build({
                            authorize: true,
                            user_id: user.id,
                            place_id: place.id
                        })
                        .save()
                        .then((data) => {
                            res.status(200).send(userId.toString());
                        })
                        .catch(error);
                    } else {
                        History
                        .build({
                            authorize: false,
                            user_id: user.id,
                            place_id: place.id
                        })
                        .save()
                        .then((data) => {
                            res.sendStatus(401);
                        })
                        .catch(error);
                    }    
                } else {
                    res.status(404).send("User not found");
                }
            })
            .catch(error);
        }

        function error(err) {
            res.status(500).send(JSON.stringify(err));
        }
    };
};