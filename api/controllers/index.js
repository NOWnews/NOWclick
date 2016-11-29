
import home from './home';

module.exports = (app) => {

    app.use('/api', home);

    return (req, res, next) => {
        return next();
    };
};
