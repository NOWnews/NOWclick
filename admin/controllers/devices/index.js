import express from 'express';
let router = express.Router();

import isAuth from '../../middlewares/isAuth';

import pageCreate from './page.create';
import pageList from './page.list';
import pageOne from './page.one';

import actionCreate from './action.create';
import actionUpdate from './action.update';

router.route('/create')
    .post(isAuth, actionCreate)
    .get(isAuth, pageCreate);

router.route('/')
    .get(isAuth, pageList);

router.route('/:id')
    .put(isAuth, actionUpdate)
    .get(isAuth, pageOne);

module.exports = router;