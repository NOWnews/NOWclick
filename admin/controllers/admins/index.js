
import express from 'express';
let router = express.Router();

import pageCreate from './page.create';
import pageList from './page.list';
import pageOne from './page.one';

router.route('/create')
    .get(pageCreate);

router.route('/')
    .get(pageList);

router.route('/:id')
    .get(pageOne);

module.exports = router;
