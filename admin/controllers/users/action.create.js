/*
 * 新增用戶
 */

import Debug from 'debug';
const debug = Debug('NOWott-admin:controllers:users:action.create');

import { Member } from '../../../models';
import { checkPassword } from '../../../libs';

module.exports = async (req, res, next) => {

    let { username, password, phone, email, address, gender, memo } = req.body;

    try {

        let user = await Member.findOne({
                where: {
                    username: username,
                    hashedPassword: checkPassword(password)
                }
            });

        debug('user = %j', user);

        if(user) {
            throw new Error('使用者已經存在');
        }

        let options = {
            username: username,
            // password 是一個虛擬欄位，他會幫你把 pwd hash，然後存入到 hashedPassword 這個欄位
            password: password,
            phone: phone,
            email: email,
            address: address,
            gender: gender,
            memo: memo,
        };

        debug('options = %j', options);

        let newUser = await Member.create(options);

        return res.redirect('/users');

    } catch(err) {
        return next(err);
    }
};