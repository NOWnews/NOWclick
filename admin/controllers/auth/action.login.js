import Debug from 'debug';
const debug = Debug('NOWclick-admin:controllers:auth:action.login');

import { getHashedPassword, checkPassword } from '../../../libs';

module.exports = async (req, res, next) => {

    let { email, password } = req.body;

    try {
        debug(req.body);
        let manager = await db.Manager.findOne({
                where: {
                    email
                }
            });
        debug('manager = %j', manager);

        if(!manager) {
            throw new Error('找不到這位管理者，請聯絡王志堅');
        }

        let correctPwd = checkPassword(manager.hashedPassword, password);

        if(!correctPwd) {
            throw new Error('輸入的密碼不正確，你他媽是腦殘嗎');
        }

        req.session.Manager = manager;
        debug('req.session.Manager = %j', manager);

        return res.redirect('/');
    } catch(err) {
        return next(err);
    }
};
