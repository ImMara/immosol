exports.getVentes = async( req,res,next)=>{
    try{
        res.render('ventes/index',{currentUser:req.user})
    }catch (e) {
        next(e)
    }
}