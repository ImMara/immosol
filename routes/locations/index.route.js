const {uploadLocation} = require("../../config/multer.config");
const {deleteLocation} = require("../../controllers/locations.controller");
const {updateLocation} = require("../../controllers/locations.controller");
const {getLocation} = require("../../controllers/locations.controller");
const {formLocations} = require("../../controllers/locations.controller");
const {createLocations} = require("../../controllers/locations.controller");
const {getLocations} = require("../../controllers/locations.controller");
const router = require('express').Router();
const {ensureAuthenticated} = require("../../config/guards.config");

router.get('/',ensureAuthenticated, getLocations )
router.get('/create',ensureAuthenticated,formLocations)
router.post('/create',
    ensureAuthenticated,
    uploadLocation.array('gallery',15),
    createLocations
)
router.get('/:id',ensureAuthenticated, getLocation)
router.post('/update/:id',
    ensureAuthenticated,
    uploadLocation.array('gallery',15),
    updateLocation
)
router.get('/delete/:id',ensureAuthenticated,deleteLocation)

module.exports = router;