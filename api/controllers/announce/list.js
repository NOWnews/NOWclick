module.exports = async (req, res, next) => {
    let today = new Date();
    let announces = await db.Announce.findAll({
        attributes: [
            'content',
            'endTime',
            'startTime',
        ],
        where: {
            actived: true,
            startTime: {
                $lte: today
            },
            endTime: {
                $gte: today
            },
        },
        order: 'startTime ASC',
    });
    return res.json(announces);
};
