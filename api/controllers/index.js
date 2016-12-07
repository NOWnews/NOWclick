import home from './home';
import announce from './announce';
import channel from './channel';
import movie from './movie';

module.exports = (app) => {
    let defaultVersionPath = ['/api/v1', '/api'];

    app.use(defaultVersionPath, home);
    app.use(defaultVersionPath, announce);
    app.use(defaultVersionPath, channel);
    app.use(defaultVersionPath, movie);

    return (req, res, next) => {
        return next();
    };
};
