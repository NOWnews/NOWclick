import express from 'express';
let router = express.Router();

import create from './create';
import one from './one';
import update from './update';

router.route('/device')
    .post(create);

router.route('/device/:deviceId')
    .get(one)
    .put(update);

module.exports = router;
