import Debug from 'debug';
const debug = Debug('NOWclick-admin:controllers:devices:page.one');

import moment from 'moment';

module.exports = async (req, res, next) => {

    let { id } = req.params;
    debug('id = %s', id);

    try{

        let device = await db.Device.findById(id, {
            include: [
                db.User,
                {
                    model: db.Manager,
                    as: 'CreatedBy'
                },
                {
                    model: db.Manager,
                    as: 'UpdatedBy'
                }
            ],
            raw: true,
            nest: true
        });
        debug('device = %j', device);

        if(!device) {
            throw new Error('找不到 device 資料');
        }

        device.createdAt = moment(device.createdAt).tz('Asia/Taipei').format('YYYY/MM/DD HH:mm');
        device.updatedAt = moment(device.updatedAt).tz('Asia/Taipei').format('YYYY/MM/DD HH:mm');

        if(!device.User) {
            device.User = {};
        }

        return res.render('devices/one.html', {
            device
        });
    }
    catch(err) {
        return next(err);
    }
};
