const router = require('express').Router();
const api = require('./api/index.route');
const locations = require('./locations/index.route');

router.use('/api',api)
router.use('/locations',locations)

router.get('/', ((req, res) => {
        res.render('index');
}))

module.exports = router;