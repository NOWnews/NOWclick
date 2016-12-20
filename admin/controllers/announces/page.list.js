import Debug from 'debug';
const debug = Debug('NOWott-admin:controllers:announces:page.list');

import moment from 'moment-timezone';

module.exports = async (req, res, next) => {

    try{

        let announces = await db.Announce.findAll({
            where: {},
            include: [ db.Manager ],
            raw: true,
            nest: true,
            order: [['createdBy','DESC']]
        });
        debug('announces = %j', announces);

        _.forEach(announces, (announce) => {
            announce.startTime = moment(announce.startTime).tz('Asia/Taipei').format('YYYY/MM/DD');
            announce.endTime = moment(announce.endTime).tz('Asia/Taipei').format('YYYY/MM/DD');
            announce.createdAt = moment(announce.createdAt).tz('Asia/Taipei').format('YYYY/MM/DD HH:mm');
            announce.updatedAt = moment(announce.updatedAt).tz('Asia/Taipei').format('YYYY/MM/DD HH:mm');
            announce.actived = announce.actived === 1 ? '是' : '否';
        });

        return res.render('announces/list.html', {
            announces
        });
    }
    catch(err) {
        return next(err);
    }
};