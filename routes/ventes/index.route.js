const {updateVente} = require("../../controllers/ventes.controller");
const {deleteVente} = require("../../controllers/ventes.controller");

const {getVente} = require("../../controllers/ventes.controller");
const {formVentes} = require("../../controllers/ventes.controller");
const {uploadVente} = require("../../config/multer.config");
const {createVentes} = require("../../controllers/ventes.controller");
const {getVentes} = require("../../controllers/ventes.controller");
const router = require('express').Router();


router.get('/',getVentes)
router.get('/create',formVentes)
router.post('/create',
    uploadVente.array('gallery',15),
    createVentes
)
router.get('/:id', getVente)
router.post('/update/:id',
    uploadVente.array('gallery',15),
    updateVente
)
router.get('/delete/:id',deleteVente)

module.exports = router;