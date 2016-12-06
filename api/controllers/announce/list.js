module.exports = async (req, res, next) => {
    let today = new Date();
    let announces = await db.Announce.findAll({
        attributes: [
            'content',
            'endTime',
            'startTime',
            'type',
        ],
        where: {
            actived: true,
            $or: [
                {
                    startTime: {
                        $gte: today
                    },
                },
                {
                    startTime: {
                        $lte: today
                    },
                    endTime: {
                        $gte: today
                    },
                }
            ]
        },
        order: 'startTime ASC',
    });
    return res.json(announces);
};
