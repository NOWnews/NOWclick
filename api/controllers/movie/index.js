import express from 'express';
let router = express.Router();

import list from './list';

router.route('/movies')
    .get(list);

module.exports = router;
