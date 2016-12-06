module.exports = async (req, res, next) => {

    let { deviceType } = req.query;

    let version = await db.Version.findOne({
        attributes: [
            'apkUrl',
            'publishedDate',
            'version',
        ],
        where: {
            deviceType,
        },
    });
    return res.json(version);
};
