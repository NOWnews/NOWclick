import home from './home';
import announce from './announce';
import version from './version';

module.exports = (app) => {
    let defaultVersionPath = ['/api/v1', '/api'];

    app.use(defaultVersionPath, home);
    app.use(defaultVersionPath, announce);
    app.use(defaultVersionPath, version);

    return (req, res, next) => {
        return next();
    };
};
