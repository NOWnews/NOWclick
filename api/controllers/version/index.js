import express from 'express';
let router = express.Router();

import check from './check';

router.route('/version')
    .get(check);

module.exports = router;
