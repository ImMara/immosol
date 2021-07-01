const {getVentesAndLocations} = require("../../controllers/api.controller");
const {getVente} = require("../../controllers/api.controller");
const {getVentes} = require("../../controllers/api.controller");
const {getLocation} = require("../../controllers/api.controller");
const {getLocations} = require("../../controllers/api.controller");
const {deleteOneVente} = require("../../controllers/api.controller");
const {deleteOne} = require("../../controllers/api.controller");
const {example} = require("../../controllers/api.controller");
const router = require('express').Router();

router.get('/' , example )
router.put('/delete/gallery/:id/:pos',deleteOne)
router.put('/vente/delete/gallery/:id/:pos',deleteOneVente)
router.get('/locations',getLocations)
router.get('/location/:id',getLocation)
router.get('/ventes',getVentes)
router.get('/vente/:id',getVente)
router.get('/all/:limit',getVentesAndLocations)

module.exports = router;