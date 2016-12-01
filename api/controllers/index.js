
import home from './home';

module.exports = (app) => {

    app.use('/api', home);
    app.use('/api/v1', home);

    return (req, res, next) => {
        return next();
    };
};
