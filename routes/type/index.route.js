const {getType} = require("../../controllers/type.controller");
const router = require('express').Router();

router.get('/', getType)

module.exports = router;