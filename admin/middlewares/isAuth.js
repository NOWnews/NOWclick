import Debug from 'debug';
const debug = Debug('NOWott-admin:middlewares:isAuth');

module.exports = (req, res, next) => {

    if(!req.session || !req.session.Manager) {
        return res.redirect('/auth/login');
    }
    debug('Session Manager = %j', req.session.Manager);

    res.locals.ottManager = req.session.Manager;

    return next();
};