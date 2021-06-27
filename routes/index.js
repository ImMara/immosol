const router = require('express').Router();
const api = require('./api/index.route');
const locations = require('./locations/index.route');
const utilisateurs = require('./utilisateurs/index.route');
const {logout} = require("../controllers/auth.controller");
const {login} = require("../controllers/auth.controller");
const compte = require('./compte/index.route');
const type = require('./type/index.route');
const vente = require('./ventes/index.route');
const {findLastVente} = require("../database/queries/vente.queries");
const {findAllVente} = require("../database/queries/vente.queries");
const {findLastLocation} = require("../database/queries/locations.queries");
const {findFeatured} = require("../database/queries/locations.queries");
const {findAllLocations} = require("../database/queries/locations.queries");

router.use('/api',api)
router.use('/locations',locations)
router.use('/utilisateurs',utilisateurs)
router.use('/compte',compte)
router.use('/type', type)
router.use('/ventes',vente)

router.get('/', ((req, res) => {
        if (req.user) {
             res.redirect("/dashboard");
        }
        if(!req.user){
             res.render('index');
        }
}))

router.post('/login', login);
router.get('/logout', logout);

router.get('/dashboard',async (req,res,next)=>{
        const locations = await findAllLocations()
        const featured = await findFeatured();
        const ventes = await findAllVente();
        const last = await findLastLocation(2);
        const lastVente = await findLastVente(2);
        res.render('dashboard/index',{ currentUser : req.user,locations , featured , last , ventes , lastVente});
})


module.exports = router;