import Debug from 'debug';
const debug = Debug('NOWott-admin:controllers:devices:page.list');

import moment from 'moment-timezone';

module.exports = async (req, res, next) => {

    try{

        let devices = await db.Device.findAll({
            where: {},
            include: [db.User],
            raw: true,
            nest: true
        });

        // 正規化資料格式
        _.forEach(devices, (device) => {
            device.createdAt = moment(device.createdAt).tz('Asia/Taipei').format('YYYY/MM/DD HH:mm');
            device.updatedAt = moment(device.updatedAt).tz('Asia/Taipei').format('YYYY/MM/DD HH:mm');
            device.actived = device.actived === 1 ? '是' : '否';
        });

        debug('device = %j', formatDevices);
        return res.render('devices/list.html', {
            devices
        });
    }
    catch(err) {
        return next(err);
    }
};