const router = require('express').Router();
const api = require('./api/index.route');
const locations = require('./locations/index.route');
const utilisateurs = require('./utilisateurs/index.route');
const {logout} = require("../controllers/auth.controller");
const {login} = require("../controllers/auth.controller");

router.use('/api',api)
router.use('/locations',locations)
router.use('/utilisateurs',utilisateurs)

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