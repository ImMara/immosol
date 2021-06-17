const router = require('express').Router();
const api = require('./api/index.route');
const locations = require('./locations/index.route');
const utilisateurs = require('./utilisateurs/index.route');

router.use('/api',api)
router.use('/locations',locations)
router.use('/utilisateurs',utilisateurs)

router.get('/', ((req, res) => {
        res.render('index');
}))


module.exports = router;