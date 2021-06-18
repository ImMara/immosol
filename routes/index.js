const router = require('express').Router();
const api = require('./api/index.route');
const locations = require('./locations/index.route');
const utilisateurs = require('./utilisateurs/index.route');
const {logout} = require("../controllers/auth.controller");
const {login} = require("../controllers/auth.controller");
const compte = require('./compte/index.route');
const type = require('./type/index.route');
const vente = require('./ventes/index.route');

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

router.get('/dashboard',(req,res,next)=>{
        res.render('dashboard/index',{ currentUser : req.user});
})


module.exports = router;