import express from 'express';
let router = express.Router();

import create from './create';
import update from './update';

router.route('/device')
    .post(create);

router.route('/device/:deviceId')
    .put(update);

module.exports = router;
