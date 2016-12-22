
import express from 'express';
let router = express.Router();

import pageLogin from './page.login';

import actionLogin from './action.login';
import actionLogout from './action.logout';

router.route('/login')
    .post(actionLogin)
    .get(pageLogin);

router.route('/logout')
    .get(actionLogout);

module.exports = router;