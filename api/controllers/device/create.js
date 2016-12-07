module.exports = async (req, res, next) => {
    try {
        let device = await db.Device.create(req.body);
        return res.json(device);
    } catch (e) {
        return next(e);
    }
};
