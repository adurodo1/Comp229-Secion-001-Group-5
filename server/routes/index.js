var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');
const { route } = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'NST Survey', displayName: req.user ? req.user.displayName: ''});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', {title: 'NST Survey'});
});

/*
router.get('/survey', function(req, res, next){
  res.render('survey', {title: 'Create Survey Page'})
})

*/

/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

router.get('/surveyDB', function(req, res, next){
  res.render('surveyDB', {title: 'Existing Survey Page'})
})


module.exports = router;
