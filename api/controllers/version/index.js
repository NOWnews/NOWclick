import express from 'express';
let router = express.Router();

import one from './one';

router.route('/version')
    .get(one);

module.exports = router;
