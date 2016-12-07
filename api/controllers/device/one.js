module.exports = async (req, res, next) => {
    try {
        let { deviceId } = req.params;
        let device = await db.Device.findOne({
            where: {
                id: deviceId,
                actived: true,
            },
            attributes: [
                'id',
                'identifier',
                'type',
            ]
        });
        return res.json(device);
    } catch (e) {
        return next(e);
    }
};
