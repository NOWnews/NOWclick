import Debug from 'debug';
const debug = Debug('NOWott-admin:controllers:managers:page.list');

import moment from 'moment-timezone';

module.exports = async (req, res, next) => {

    try{

        let managers = await db.Manager.findAll({
            where: {},
            raw: true
        });

        // 正規化資料格式
        _.forEach(managers, (manager) => {
            manager.createdAt = moment(manager.createdAt).tz('Asia/Taipei').format('YYYY/MM/DD HH:mm');
            manager.updatedAt = moment(manager.updatedAt).tz('Asia/Taipei').format('YYYY/MM/DD HH:mm');

        });

        debug('result = %j', managers);
        return res.render('managers/list.html', {
            managers
        });
    }
    catch(err) {
        return next(err);
    }
};
