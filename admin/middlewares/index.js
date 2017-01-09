
import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import multer from 'multer';
import cookieSession from 'cookie-session';
import nunjucks from 'nunjucks';
import methodOverride from 'method-override';

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

    app.use(methodOverride(function (req, res) {
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
            let method = req.body._method;
            delete req.body._method;
            return method;
        }
    }));

    // app.use(upload.fields([
    //     { name: 'file', maxCount: 1 },
    // ]));

    // express session setting
    app.set('trust proxy', 1);
    app.use(cookieSession({
        name: 'click',
        keys: ['NOWclick', 'click']
    }));

    // view engine 設定與 views 擺放位置設定
    app.set('view engine', 'html');
    nunjucks.configure('admin/views', {
        autoescape: true,
        express: app,
        watch: true
    });

    // 靜態檔案位置
    app.use('/static', express.static(rootPath + '/admin/static/'));

    // overwrite put and delete method
    app.use(methodOverride((req, res) => {
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
            let method = req.body._method;
            delete req.body._method;
            return method;
        }
    }));

    app.use(logger('dev'));

    return (req, res, next) => {
        return next();
    };
};
