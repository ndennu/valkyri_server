module.exports = (api) => {
    const History = api.models.History;
    const Sequelize = require('sequelize');

    return (req, res) => {
        let respond = (histories) => {
            if(histories.lenght === 0){
                res.status(204).send(histories);
            } else {
                res.status(200).send(histories);
            }
        };

        let returnError = (err) => {
            res.status(500).send({
                ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        History.findAll({
            where: {
                where: Sequelize.where(Sequelize.fn('MONTH', Sequelize.col('createdAt')), req.params.month)
            }
        })
        .then(respond)
        .catch(returnError);
    };
};