
import logger from 'morgan';
import cors from 'cors';

module.exports = (app) => {

    app.use(cors());
    app.use(logger('dev'));

    return (req, res, next) => {
        return next();
    };
};