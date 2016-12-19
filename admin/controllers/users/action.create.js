/*
 * 新增用戶
 */

import Debug from 'debug';
const debug = Debug('NOWott-admin:controllers:users:action.create');

import { getHashedPassword } from '../../../libs';

module.exports = async (req, res, next) => {

    let { username, password, phone, email, address, gender, memo } = req.body;

    try {

        let hashedPassword = getHashedPassword(password);

        let user = await db.User.findOne({
                where: {
                    username,
                    hashedPassword
                }
            });

        debug('user = %j', user);

        if(user) {
            throw new Error('使用者已經存在');
        }

        let options = {
            username,
            // password 是一個虛擬欄位，他會幫你把 pwd hash，然後存入到 hashedPassword 這個欄位
            password,
            phone,
            email,
            address,
            gender,
            memo
        };

        options.createdBy = 1;
        options.updatedBy = 1;

        debug('options = %j', options);

        let newUser = await db.User.create(options);

        debug('newUser = %j', newUser);

        return res.redirect('/users');

    } catch(err) {
        return next(err);
    }
};