import Debug from 'debug';
const debug = Debug('NOWott-admin:controllers:announces:page.one');

import moment from 'moment';

module.exports = async (req, res, next) => {

    let { id } = req.params;
    debug('id = %s', id);

    try{

        let announce = await db.Announce.findById(id, {
            include: [
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
        debug('announce = %j', announce);

        if(!announce) {
            throw new Error('找不到 announce 資料');
        }

        announce.createdAt = moment(announce.createdAt).tz('Asia/Taipei').format('YYYY/MM/DD HH:mm');
        announce.updatedAt = moment(announce.updatedAt).tz('Asia/Taipei').format('YYYY/MM/DD HH:mm');
        announce.startTime = moment(announce.startTime).tz('Asia/Taipei').format('YYYY/MM/DD');
        announce.endTime = moment(announce.endTime).tz('Asia/Taipei').format('YYYY/MM/DD');

        return res.render('announces/one.html', {
            announce
        });
    }
    catch(err) {
        return next(err);
    }
};