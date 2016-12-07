module.exports = async (req, res, next) => {
    try {
        let { deviceId } = req.params;
        let device = await db.Device.findById(deviceId);
        return res.json(device);
    } catch (e) {
        return next(e);
    }
};
