import Debug from 'debug';
const debug = Debug('NOWott-admin:controllers:managers:page.one');

import moment from 'moment';

module.exports = async (req, res, next) => {

    let { id } = req.params;
    debug('id = %s', id);

    try{

        let manager = await db.Manager.findById(id, {
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
        debug('manager = %j', manager);

        if(!manager) {
            throw new Error('找不到 管理者 資料');
        }

        manager.createdAt = moment(manager.createdAt).tz('Asia/Taipei').format('YYYY/MM/DD HH:mm');
        manager.updatedAt = moment(manager.updatedAt).tz('Asia/Taipei').format('YYYY/MM/DD HH:mm');
        debug('manager.createdAt = %j', manager.createdAt);
        if(manager.role === 'MANAGER') {
            manager.role = '管理員';
        }

        if(manager.role === 'SYSTEM') {
            manager.role = '系統管理員';
        }

        return res.render('managers/one.html', {
            manager
        });
    }
    catch(err) {
        return next(err);
    }
};
