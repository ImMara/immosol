const {deleteLocation} = require("../../controllers/locations.controller");
const {updateLocation} = require("../../controllers/locations.controller");
const {getLocation} = require("../../controllers/locations.controller");
const {formLocations} = require("../../controllers/locations.controller");
const {createLocations} = require("../../controllers/locations.controller");
const {getLocations} = require("../../controllers/locations.controller");
const router = require('express').Router();

router.get('/', getLocations )
router.get('/create',formLocations)
router.post('/create',createLocations)
router.get('/:id', getLocation)
router.post('/update/:id',updateLocation)
router.get('/delete/:id',deleteLocation)

module.exports = router;