
import express from 'express';
let router = express.Router();

import isAuth from '../../middlewares/isAuth';

import pageHome from './page.home';

router.route('/')
    .get(isAuth, pageHome);

module.exports = router;