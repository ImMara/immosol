const User = require("../database/schemas/user.model");
const {findUserAndUpdateWithPassword} = require("../database/queries/user.queries");
const {findUser} = require("../database/queries/user.queries");
const {findUserAndUpdate} = require("../database/queries/user.queries");

exports.getCompte = async (req,res,next) =>{
    try{
        res.render('compte/index',{currentUser: req.user})
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

        const user = await findUser(id);
        res.render('compte/index',{currentUser:user})
    }catch (e) {
        next(e)
    }
}