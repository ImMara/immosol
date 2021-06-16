const {example} = require("../../controllers/api.router");
const router = require('express').Router();

router.get('/' , example )

module.exports = router;