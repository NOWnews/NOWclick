module.exports = async (req, res, next) => {
    try {
        let params = req.body;
        params.actived = true;
        params.createdBy = config.superAdminId;
        params.updatedBy = config.superAdminId;
        let result = await db.Device.create(params);
        return res.json({ result });
    } catch (e) {
        return next(e);
    }
};
