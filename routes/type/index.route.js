const {deleteType} = require("../../controllers/type.controller");
const {createType} = require("../../controllers/type.controller");
const {getType} = require("../../controllers/type.controller");
const {ensureAuthenticated} = require("../../config/guards.config");
const router = require('express').Router();

router.get('/',ensureAuthenticated, getType);
router.post('/create',ensureAuthenticated, createType);
router.get('/delete/:id',ensureAuthenticated,deleteType);

module.exports = router;