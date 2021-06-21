const {deleteOne} = require("../../controllers/api.controller");
const {example} = require("../../controllers/api.controller");
const router = require('express').Router();

router.get('/' , example )
router.get('/delete/gallery/:id/:pos',deleteOne)

module.exports = router;