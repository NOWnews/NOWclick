module.exports = async (req, res, next) => {
    try {
        let params = req.body;
        params.actived = true;
        params.createdBy = config.superAdminId;
        params.updatedBy = config.superAdminId;
        let optionObj = {
            where: {identifier: params.identifier},
            defaults: params
        }
        let result = await db.Device.findOrCreate(optionObj);
        return res.json({ result });
    } catch (e) {
        return next(e);
    }
};
