import Debug from 'debug';
const debug = Debug('NOWott-admin:controllers:users:action.update');

module.exports = async (req, res, next) => {

    let { id } = req.params;
    let { username, phone, email, address, memo } = req.body;

    try {
        let user = await db.User.findById(id);

        if(!user) {
            throw new Error('找不到 user');
        }

        if(username) {
            user.set('username', username);
        }

        if(phone) {
            user.set('phone', phone);
        }

        if(email) {
            user.set('email', email);
        }

        if(memo) {
            user.set('memo', memo);
        }
        debug('user = %j', user);

        let updatedUser = await user.save();
        debug('update user = %j', updatedUser);
        // return res.redirect(`/users/${user.id}`);
        return res.redirect(/users/);
    } catch(err) {
        return next(err);
    }
};
