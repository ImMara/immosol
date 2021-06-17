exports.getLocations = async (req,res,next) =>{
    try{
        res.render('locations/index')
    }catch (e) {
        next(e)
    }
}

exports.createLocations = async (req,res,next) =>{
    try{
        res.render('locations/create')
    }catch (e){
        next(e)
    }
}