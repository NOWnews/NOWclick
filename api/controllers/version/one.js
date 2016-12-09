module.exports = async (req, res, next) => {
    try {

        let today = new Date();
        let { deviceType } = req.query;

        let result = await db.Version.findOne({
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
        return res.json({ result });

    } catch (e) {

        return next(e);

    }

};
