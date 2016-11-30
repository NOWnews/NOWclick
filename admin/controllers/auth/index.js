
import express from 'express';
let router = express.Router();

import pageLogin from './page.login';

router.route('/login')
    .get(pageLogin);

module.exports = router;