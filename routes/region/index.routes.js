const {uploadRegion} = require("../../config/multer.config");
const {updateRegion} = require("../../controllers/region.controller");
const {getRegion} = require("../../controllers/region.controller");
const router = require('express').Router();

router.get('/', getRegion)
router.post('/update/:id',
    uploadRegion.array('gallery',15),
    updateRegion
)

module.exports = router;