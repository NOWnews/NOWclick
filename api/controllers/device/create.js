module.exports = async (req, res, next) => {
    try {
        let params = req.body;
        let result = await db.Device.find(params);

        // 如果找不到這筆資料才建立
        if (!result) {
            params.actived = true;
            params.createdBy = config.superAdminId;
            params.updatedBy = config.superAdminId;
            result = await db.Device.create(params);
        }
        return res.json({ result });
    } catch (e) {
        return next(e);
    }
};
