module.exports = async (req, res, next) => {
    try {
        let { deviceId } = req.params;
        let device = await db.Device.update(req.body, {
            where: {
                id: deviceId,
            }
        });
        return res.json(device);
    } catch (e) {
        return next(e);
    }
};
