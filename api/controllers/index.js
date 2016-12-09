import home from './home';
import announce from './announce';
import channel from './channel';
import device from './device';
import movie from './movie';
import version from './version';

module.exports = (app) => {
    let defaultVersion = '/api/v1';

    app.use(defaultVersion, home);
    app.use(defaultVersion, announce);
    app.use(defaultVersion, channel);
    app.use(defaultVersion, device);
    app.use(defaultVersion, movie);
    app.use(defaultVersion, version);

    return (req, res, next) => {
        return next();
    };
};
