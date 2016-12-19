import Debug from 'debug';
const debug = Debug('NOWott-admin:controllers:users:action.create');

module.exports = async (req, res, next) => {

    let { identifier, UserId, model, type, osVersion, actived, token } = req.body;

    try {

        let options = {
            actived: actived ? true : false,
            identifier,
            model,
            osVersion,
            token,
            type,
            UserId, 
            createdBy: 1,
            updatedBy: 1
        };

        let newDevice = await db.Device.create(options);
        debug('newDevice = %j', newDevice);

        return res.redirect('/devices');
    } catch(err) {
        return next(err);
    }
};