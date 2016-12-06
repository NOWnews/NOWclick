module.exports = async (req, res, next) => {
    let today = new Date();
    let { deviceType } = req.query;

    let version = await db.Version.findOne({
        attributes: [
            'apkUrl',
            'publishedDate',
            'version',
        ],
        where: {
            deviceType,
            publishedDate: {
                $lte: today,
            },
        },
        order: 'publishedDate DESC'
    });
    return res.json(version);
};
