
import express from 'express';
let router = express.Router();

import pageCreate from './page.create';
import pageList from './page.list';
import pageOne from './page.one';

import actionCreate from './action.create';

router.route('/create')
    .post(actionCreate)
    .get(pageCreate);

router.route('/')
    .get(pageList);

router.route('/:id')
    .get(pageOne);

module.exports = router;