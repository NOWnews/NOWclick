module.exports = async (req, res, next) => {
    try {
        let params = req.body;
        params.createdBy = config.superAdminId;
        params.updatedBy = config.superAdminId;
        let device = await db.Device.create(params);
        return res.json(device);
    } catch (e) {
        return next(e);
    }
};
