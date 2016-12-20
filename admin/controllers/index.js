
import home from './home';
import auth from './auth';
import announces from './announces';
import devices from './devices';
import managers from './managers';
import users from './users';
import versions from './versions';
import admins from './admins';

module.exports = (app) => {

    app.use('/', home);
    app.use('/auth', auth);
    app.use('/announces', announces);
    app.use('/devices', devices);
    app.use('/managers', managers);
    app.use('/users', users);
    app.use('/versions', versions);
    app.use('/admins', admins);

    return (req, res, next) => {
        return next();
    };
};
