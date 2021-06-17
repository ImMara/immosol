const {createLocations} = require("../../controllers/locations.controller");
const {getLocations} = require("../../controllers/locations.controller");
const router = require('express').Router();

router.get('/', getLocations )
router.get('/create',createLocations)

module.exports = router;