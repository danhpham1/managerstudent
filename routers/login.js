const express = require('express');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const loginController = require('../controller/login/logincontroller');

const loginRouter = express.Router();

loginRouter.use(bodyParser.urlencoded({extended:false}));



//config passport
passport.use(new localStrategy(
    function(username,password,done){
        if(username == 'admin'){
            if(password == '123456'){
                return done(null,username);
            }else{
                return done(null,false);
            }
        }else{
            return done(null,false);
        }
    }
));

passport.serializeUser(function(username,done){
    done(null,username);
});

passport.deserializeUser(function(name,done){
    if(name == 'admin'){
         done(null,true);
    }else{
         done(null,false);
    }
});


loginRouter.get('',loginController.getLoginIndex);

loginRouter.post('',passport.authenticate('local',{
    successRedirect:'/',
    failureRedirect:'/login'
}));



module.exports = loginRouter