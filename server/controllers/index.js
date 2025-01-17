let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// enable jwt
let jwt = require('jsonwebtoken');
let DB = require('../config/db');

// create the User Model instance
let userModel = require('../models/user');
let User = userModel.User; // alias

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 541e205932f39f64c4261dce5bba8dab26c0a162



/* GET home page. with login details*/
module.exports.displayHomePageWithLogin=(req, res, next)=> {
    res.render('index', {title: 'NST Survey', displayName: req.user ? req.user.displayName: ''});
  };

//Controller for index page with 

module.exports.displayHomePage=(req, res, next)=> {
    res.render('index', {title: 'NST Survey'});
  };


 
 


//log in page

<<<<<<< HEAD
=======
=======
>>>>>>> db9cc6315db30e32d2b3bd70115ddc60bea45c33
>>>>>>> 541e205932f39f64c4261dce5bba8dab26c0a162
module.exports.displayLoginPage = (req, res, next) => {
    // check if the user is already logged in
    if(!req.user) 
    {
        res.render('auth/login',
        {
            title: "Login",
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else 
    {
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',
    (err, user, info) => {
        // server error?
        if(err) 
        {
            return next(err);
        }
        // is there a user login error?
        if(!user) 
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login')
        }
        req.login(user, (err) => {
            // server error?
            if(err)
            {
                return next(err);
            }

            const payload = 
            {
                id: user._id,
                displayName: user.displayName,
                username: user.username,
                email: user.email
            }

            const authToken = jwt.sign(payload, DB.Secret, {
                expiresIn: 604800 // 1 week
            });

            /*
            res.json({success: true, msg: 'User Logged in Successfully!', user: {
                id: user._id,
                displayName: user.displayName,
                username: user.username,
                email: user.email
            }, token: authToken});
            */

<<<<<<< HEAD
            return res.redirect('/surveys');
=======
<<<<<<< HEAD
            return res.redirect('/surveys');
=======
            return res.redirect('/');
>>>>>>> db9cc6315db30e32d2b3bd70115ddc60bea45c33
>>>>>>> 541e205932f39f64c4261dce5bba8dab26c0a162
        });
    })(req, res, next);
}

module.exports.displayRegisterPage = (req, res, next) => {
    // check if the user is no already logged in
    if(!req.user) 
    {
        res.render('auth/register', 
        {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        })
    }
    else 
    {
        return res.redirect('/');
    }
}

module.exports.processRegisterPage = (req, res, next) => {
    // instantiate a user object
    let newUser = new User({
        username: req.body.username,
        //password: req.body.password
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser, req.body.password, (err) => {
        if(err)
        {
            console.log("Error: Inserting New User");
            if(err.name == "UserExistsError")
            {
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
                console.log('Error: User Already Exists!')
            }
            return res.render('auth/register', 
            {
                title: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName: ''
            })
        }
        else 
        {
            // if no error exists, then registration is successful

            // redirect the user and authenticate them

            /*
            res.json({success: true, msg: 'User Registrered Successfully'});
            */

            return passport.authenticate('local')(req, res, () => {
                res.redirect('/')
            });
        }
    });
}

module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}