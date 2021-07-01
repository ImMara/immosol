const {uploadRegion} = require("../../config/multer.config");
const {updateRegion} = require("../../controllers/region.controller");
const {getRegion} = require("../../controllers/region.controller");
const router = require('express').Router();
const {ensureAuthenticated} = require("../../config/guards.config");

router.get('/',ensureAuthenticated, getRegion)
router.post('/update/:id',
    ensureAuthenticated,
    uploadRegion.array('gallery',15),
    updateRegion
)

module.exports = router;