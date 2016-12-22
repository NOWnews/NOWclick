import Debug from 'debug';
const debug = Debug('NOWott-admin:controllers:devices:action.update');

module.exports = async (req, res, next) => {
    let { id } = req.params;
    let { osVersion, actived } = req.body;
    try {

        let device = await db.Device.findById(id);

        if(!device) {
            throw new Error('找不到 device');
        }

        if(osVersion) {
            device.set('osVersion', osVersion);
        }

        actived = actived ? true : false;
        device.set('actived', actived);
        device.set('updatedBy', req.session.Manager.id);

        let updatedDevice = await device.save();

        // return res.redirect(`/devices/${device.id}`);
        return res.redirect(/devices/);
    } catch(err) {
        return next(err);
    }
};
