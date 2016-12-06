import home from './home';
import announce from './announce';

module.exports = (app) => {
    let defaultVersionPath = ['/api/v1', '/api'];

    app.use(defaultVersionPath, home);
    app.use(defaultVersionPath, announce);

    return (req, res, next) => {
        return next();
    };
};
