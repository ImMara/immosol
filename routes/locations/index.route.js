const {getLocations} = require("../../controllers/locations.controller");
const router = require('express').Router();

router.get('/', getLocations )

module.exports = router;