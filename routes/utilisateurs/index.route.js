const {ensureAuthenticated} = require("../../config/guards.config");
const {deleteUtilisateur} = require("../../controllers/utilisateurs.controller");
const {formUtilisateur} = require("../../controllers/utilisateurs.controller");
const {createUtilisateur} = require("../../controllers/utilisateurs.controller");
const {getUtilisateurs} = require("../../controllers/utilisateurs.controller");
const router = require('express').Router();

router.get('/',ensureAuthenticated, getUtilisateurs )
router.get('/create',ensureAuthenticated,formUtilisateur)

router.post('/create',ensureAuthenticated,createUtilisateur)
router.get('/:id',ensureAuthenticated, deleteUtilisateur)

module.exports = router;