import home from './home';
import announce from './announce';
import device from './device';

module.exports = (app) => {
    let defaultVersionPath = ['/api/v1', '/api'];

    app.use(defaultVersionPath, home);
    app.use(defaultVersionPath, announce);
    app.use(defaultVersionPath, device);

    return (req, res, next) => {
        return next();
    };
};
