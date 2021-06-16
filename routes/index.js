const router = require('express').Router();
const api = require('./api/index.route');

router.use('/api',api)

router.get('/', ((req, res) => {
        res.render('index');
}))

module.exports = router;