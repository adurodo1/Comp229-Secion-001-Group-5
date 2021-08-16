var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');
const { route } = require('./users');

<<<<<<< HEAD
/* GET home page. with login details */
router.get('/',  indexController.displayHomePageWithLogin);
=======
<<<<<<< HEAD
/* GET home page. with login details */
router.get('/',  indexController.displayHomePageWithLogin);
=======
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'NST Survey', displayName: req.user ? req.user.displayName: ''});
});
>>>>>>> db9cc6315db30e32d2b3bd70115ddc60bea45c33
>>>>>>> 541e205932f39f64c4261dce5bba8dab26c0a162

/* GET home page. */

router.get('/home',  indexController.displayHomePageWithLogin);

 

/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);
<<<<<<< HEAD
=======

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);
>>>>>>> 541e205932f39f64c4261dce5bba8dab26c0a162

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

router.get('/surveyDB', function(req, res, next){
  res.render('surveyDB', {title: 'Existing Survey Page'})
})


module.exports = router;
