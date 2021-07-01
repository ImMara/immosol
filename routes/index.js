const router = require('express').Router();
const api = require('./api/index.route');

const locations = require('./locations/index.route');
const utilisateurs = require('./utilisateurs/index.route');
const {logout} = require("../controllers/auth.controller");
const {login} = require("../controllers/auth.controller");
const compte = require('./compte/index.route');
const type = require('./type/index.route');
const vente = require('./ventes/index.route');
const region = require('./region/index.routes');
const {ensureAuthenticated} = require("../config/guards.config");
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
router.use('/region',region)

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

router.get('/dashboard',ensureAuthenticated,async (req,res,next)=>{
        const locations = await findAllLocations()
        const featured = await findFeatured();
        const ventes = await findAllVente();
        const last = await findLastLocation(2);
        const lastVente = await findLastVente(2);
        res.render('dashboard/index',{ currentUser : req.user,locations , featured , last , ventes , lastVente});
})

router.use(function(req, res, next) {
        res.status(404);

        // respond with html page
        if (req.accepts('html')) {
                res.render('404', { currentUser : req.user , url: req.url });
                return;
        }

        // respond with json
        if (req.accepts('json')) {
                res.json({ error: 'Not found' });
                return;
        }

        // default to plain-text. send()
        res.type('txt').send('Not found');
});



module.exports = router;