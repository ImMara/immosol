exports.getLocations = async (req,res,next) =>{
    try{
        res.render('locations/index',{currentUser: req.user})
    }catch (e) {
        next(e)
    }
}

exports.createLocations = async (req,res,next) =>{
    try{
        res.render('locations/create',{currentUser: req.user})
    }catch (e){
        next(e)
    }
}