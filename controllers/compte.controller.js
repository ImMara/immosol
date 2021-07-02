const User = require("../database/schemas/user.model");
const {findUserAndUpdateWithPassword} = require("../database/queries/user.queries");
const {findUser} = require("../database/queries/user.queries");
const {findUserAndUpdate} = require("../database/queries/user.queries");

exports.getCompte = async (req,res,next) =>{
    try{
        const message = req.query.success
        res.render('compte/index',{currentUser: req.user , message})
    }catch (e) {
        next(e)
    }
}

exports.updateCompte = async (req,res,next) => {
    try{
        const id = req.params.id
        const body = req.body;

        if(!req.body.password){
            await findUserAndUpdate(id,body,req.user.local.password);
        }

        if(req.body.password){
            await findUserAndUpdateWithPassword(id,body);
        }

        const string = `Mise à jour du compte ${id} réussie`

        res.redirect('/compte/?success='+string)

    }catch (e) {
        next(e)
    }
}