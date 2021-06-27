const {deleteOneVente} = require("../../controllers/api.controller");
const {deleteOne} = require("../../controllers/api.controller");
const {example} = require("../../controllers/api.controller");
const router = require('express').Router();

router.get('/' , example )
router.put('/delete/gallery/:id/:pos',deleteOne)
router.put('/vente/delete/gallery/:id/:pos',deleteOneVente)

module.exports = router;