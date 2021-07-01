const {updateVente} = require("../../controllers/ventes.controller");
const {deleteVente} = require("../../controllers/ventes.controller");
const {ensureAuthenticated} = require("../../config/guards.config");
const {getVente} = require("../../controllers/ventes.controller");
const {formVentes} = require("../../controllers/ventes.controller");
const {uploadVente} = require("../../config/multer.config");
const {createVentes} = require("../../controllers/ventes.controller");
const {getVentes} = require("../../controllers/ventes.controller");
const router = require('express').Router();


router.get('/',ensureAuthenticated,getVentes)
router.get('/create',ensureAuthenticated,formVentes)
router.post('/create',
    ensureAuthenticated,
    uploadVente.array('gallery',15),
    createVentes
)
router.get('/:id',
    ensureAuthenticated,
    getVente
)
router.post('/update/:id',
    ensureAuthenticated,
    uploadVente.array('gallery',15),
    updateVente
)
router.get('/delete/:id',ensureAuthenticated,deleteVente)

module.exports = router;