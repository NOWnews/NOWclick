import Debug from 'debug';
const debug = Debug('NOWott-admin:controllers:devices:action.create');

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
            createdBy: req.session.Manager.id,
            updatedBy: req.session.Manager.id,
            ManagerId: req.session.Manager.id
        };

        if(!UserId || UserId === '') {
            delete options.UserId;
        }

        let newDevice = await db.Device.create(options);
        debug('newDevice = %j', newDevice);

        return res.redirect('/devices');
    } catch(err) {
        return next(err);
    }
};