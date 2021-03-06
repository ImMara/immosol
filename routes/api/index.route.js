const {getRegion} = require("../../controllers/api.controller");
const {deleteOneRegion} = require("../../controllers/api.controller");
const {getVentesAndLocations} = require("../../controllers/api.controller");
const {getVente} = require("../../controllers/api.controller");
const {getVentes} = require("../../controllers/api.controller");
const {getLocation} = require("../../controllers/api.controller");
const {getLocations} = require("../../controllers/api.controller");
const {deleteOneVente} = require("../../controllers/api.controller");
const {deleteOne} = require("../../controllers/api.controller");
const {example} = require("../../controllers/api.controller");
const router = require('express').Router();
const {ensureAuthenticated} = require("../../config/guards.config");

router.get('/' , example )
router.put('/delete/gallery/:id/:pos',ensureAuthenticated,deleteOne)
router.put('/vente/delete/gallery/:id/:pos',ensureAuthenticated,deleteOneVente)
router.put('/region/delete/gallery/:id/:pos',ensureAuthenticated,deleteOneRegion)
router.get('/locations',getLocations)
router.get('/location/:id',getLocation)
router.get('/ventes',getVentes)
router.get('/region',getRegion)
router.get('/vente/:id',getVente)
router.get('/featured',getVentesAndLocations)

module.exports = router;