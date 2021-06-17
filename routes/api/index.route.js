const {example} = require("../../controllers/api.controller");
const router = require('express').Router();

router.get('/' , example )

module.exports = router;