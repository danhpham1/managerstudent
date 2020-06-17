module.exports.ensureAuthenticated = function (req,res,next){
    // console.log("adasds");
    if(req.isAuthenticated()){
        // console.log('adsasd');
        next();
    }else{
        res.redirect('/login');
    }
    // console.log(req.isAuthenticated());
}