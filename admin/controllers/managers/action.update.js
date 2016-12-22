import Debug from 'debug';
const debug = Debug('NOWott-admin:controllers:managers:action.update');

module.exports = async (req, res, next) => {

    let { id } = req.params;
    let { username, role, email} = req.body;

    try {
        let manager = await db.Manager.findById(id);

        if(!manager) {
            throw new Error('找不到 管理者');
        }

        if(username) {
            manager.set('username', username);
        }

        if(role) {
            manager.set('role', role);
        }

        if(email) {
            manager.set('email', email);
        }

        debug('manager = %j', manager);

        manager.set('updatedBy', req.session.Manager.id);
        let updatedUser = await manager.save();
        debug('update manager = %j', updatedUser);
        return res.redirect(/managers/);
    } catch(err) {
        return next(err);
    }
};
