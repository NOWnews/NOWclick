import Debug from 'debug';
const debug = Debug('NOWott-admin:controllers:managers:action.create');

import { getHashedPassword } from '../../../libs';

module.exports = async (req, res, next) => {

    let { username, password, email, role } = req.body;
    let hashedPassword = getHashedPassword(password);

    try{

        let manager = await db.Manager.findOne({
            where: {
                email
            }
        });

        if(manager) {
            throw new Error(`${email} 管理者已經存在`);
        }

        let options = {
            username,
            password,
            email
        };

        if(role && role !== '') {
            options.role = role;
        }

        let newManager = await db.Manager.create(options);

        debug('new manager = %j', newManager);

        return res.redirect('/managers');
    }
    catch(err) {
        return next(err);
    }
};