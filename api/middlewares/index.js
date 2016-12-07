import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import parseHeader from './parseHeader';

module.exports = (app) => {

    app.use(compression());
    app.use(bodyParser.json({
        limit: '50mb'
    }));
    app.use(bodyParser.urlencoded({
        extended: true,
        limit: '50mb'
    }));
    app.use(cookieParser());
    app.use(cors());

    // 處理 header 相關驗證
    app.use(parseHeader());

    // app.use(upload.fields([
    //     { name: 'file', maxCount: 1 },
    // ]));

    // express session setting
    app.set('trust proxy', 1);
    app.use(cookieSession({
        name: 'ott',
        keys: ['NOWott', 'ott']
    }));

    app.use(logger('dev'));

    return (req, res, next) => {
        return next();
    };
};
