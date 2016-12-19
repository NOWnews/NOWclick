import Debug from 'debug';
const debug = Debug('NOWott-admin:controllers:users:page.list');

import moment from 'moment-timezone';

module.exports = async (req, res, next) => {

    try{

        let users = await db.User.findAll({
            where: {},
            raw: true
        });

        // 正規化資料格式
        let formatUsers = _.map(users, (user) => {
            user.createdAt = moment(user.createdAt).tz('Asia/Taipei').format('YYYY/MM/DD HH:mm');
            user.updatedAt = moment(user.updatedAt).tz('Asia/Taipei').format('YYYY/MM/DD HH:mm');

            if(user.gender === 'MALE') {
                user.gender = '男';
            }

            if(user.gender === 'FEMALE') {
                user.gender = '女';
            }

            if(!user.gender) {
                user.gender = '無';
            }

            return user;
        });

        debug('result = %j', users);
        return res.render('users/list.html', {
            users
        });
    }
    catch(err) {
        return next(err);
    }
};