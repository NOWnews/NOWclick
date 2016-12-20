import Debug from 'debug';
const debug = Debug('NOWott-admin:controllers:users:page.one');

import moment from 'moment';

module.exports = async (req, res, next) => {

    let { id } = req.params;
    debug('id = %s', id);

    try{

        let user = await db.User.findById(id, {
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
        debug('user = %j', user);

        if(!user) {
            throw new Error('找不到 user 資料');
        }

        user.createdAt = moment(user.createdAt).tz('Asia/Taipei').format('YYYY/MM/DD HH:mm');
        user.updatedAt = moment(user.updatedAt).tz('Asia/Taipei').format('YYYY/MM/DD HH:mm');

        return res.render('users/one.html', {
            user
        });
    }
    catch(err) {
        return next(err);
    }
};