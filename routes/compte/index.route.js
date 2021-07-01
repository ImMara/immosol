const {updateCompte} = require("../../controllers/compte.controller");
const {getCompte} = require("../../controllers/compte.controller");
const {ensureAuthenticated} = require("../../config/guards.config");
const router = require('express').Router();

router.get('/',ensureAuthenticated, getCompte )
router.post('/:id',ensureAuthenticated, updateCompte )

module.exports = router;