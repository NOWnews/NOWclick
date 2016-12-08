module.exports = async (req, res, next) => {
    try {
        let { deviceId } = req.params;
        let result = await db.Device.update(req.body, {
            where: {
                id: deviceId,
            }
        });

        if (result[0]) {
            return res.status(200).send();
        } else {
            return next('Update faild !');
        }

    } catch (e) {
        return next(e);
    }
};
