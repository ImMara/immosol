const {updateCompte} = require("../../controllers/compte.controller");
const {getCompte} = require("../../controllers/compte.controller");

const router = require('express').Router();

router.get('/', getCompte )
router.post('/:id', updateCompte )

module.exports = router;