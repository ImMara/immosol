const {deleteType} = require("../../controllers/type.controller");
const {createType} = require("../../controllers/type.controller");
const {getType} = require("../../controllers/type.controller");
const router = require('express').Router();

router.get('/', getType);
router.post('/create', createType);
router.get('/delete/:id',deleteType);

module.exports = router;