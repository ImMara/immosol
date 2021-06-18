const {getVentes} = require("../../controllers/ventes.controller");
const router = require('express').Router();


router.get('/',getVentes)

module.exports = router;