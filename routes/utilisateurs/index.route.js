const {deleteUtilisateur} = require("../../controllers/utilisateurs.controller");
const {formUtilisateur} = require("../../controllers/utilisateurs.controller");
const {createUtilisateur} = require("../../controllers/utilisateurs.controller");
const {getUtilisateurs} = require("../../controllers/utilisateurs.controller");
const router = require('express').Router();

router.get('/', getUtilisateurs )
router.get('/create',formUtilisateur)

router.post('/create',createUtilisateur)
router.get('/:id', deleteUtilisateur)

module.exports = router;