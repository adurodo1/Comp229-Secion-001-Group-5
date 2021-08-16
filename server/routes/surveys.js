let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the survey model
let survey = require('../models/survey');

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 541e205932f39f64c4261dce5bba8dab26c0a162
let surveyController= require('../controllers/surveys');


let takesurvey = require('../models/takeasurvey');

//let takesurveyController= require('../controllers/surveys');

//helper function for authentification, to guard process
function requireAuth(req,res,next)
{
  if(!req.isAuthenticated())
  {
    return res.redirect('/login');
  }
 
    next();
 
}

<<<<<<< HEAD
router.get('/createcsv/:id',surveyController.createCsv);

router.get('/createxl/:id',surveyController.createExcel);
router.get('/thanks',(req, res, err) => {

=======


router.get('/thanks',(req, res, err) => {

=======
router.get('/', (req, res, next) => {
    // find all books in the books collection
    survey.find( (err, surveys) => {
      if (err) {
        return console.error(err);
      }
      else {
        res.render('surveys/index', {
          title: 'Survey',
          survey: surveys
        });
      }
      
    });
>>>>>>> db9cc6315db30e32d2b3bd70115ddc60bea45c33
>>>>>>> 541e205932f39f64c4261dce5bba8dab26c0a162
  
   
       res.render('surveys/thanks',{
           title:'Thanks for Participating', displayName: req.user ? req.user.displayName: ''
       });
   
<<<<<<< HEAD
=======
  
 
  }
);

router.get('/takeasurvey',surveyController.displaySurveyListForTakeASurvey );


router.get('/takeasurvey/:id',surveyController.takeASurvey );

router.post('/takeasurvey/:id',surveyController.takeAsurveyAndPost );


//router.post('/takeasurvey/:id',requireAuth,surveyController.takeAsurveyAndPost);


<<<<<<< HEAD

////////////////////////////////////////////////

router.get('/',surveyController.displaySurveyList );

router.get('/add',requireAuth,surveyController.displayCreateSurveyPage );

router.post('/add',surveyController.createSurvey);

router.post('/finalcreate',surveyController.finalCreate);


// GET the Survey Details page in order to edit an existing Book
router.get('/:id',requireAuth,surveyController.createSurveyToEdit);

// POST - process the information passed from the details form and update existing survey
router.post('/:id',requireAuth,surveyController.updateSurvey);


// GET - process the delete by user id
router.get('/delete/:id',requireAuth, surveyController.deleteSurvey );




=======
  router.get('/add', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

    
   
     let a_survey = survey({
      "surveyOwner":"",
      "surveyName":"",
      "createdDate":null,
      "modifiedDate":"",
      "url":""
  });
  
     res.render('surveys/details',{title:'Create A Survey',survey:a_survey});
  
>>>>>>> 541e205932f39f64c4261dce5bba8dab26c0a162
  
 
  }
);

router.get('/takeasurvey',surveyController.displaySurveyListForTakeASurvey );


router.get('/takeasurvey/:id',surveyController.takeASurvey );

router.post('/takeasurvey/:id',surveyController.takeAsurveyAndPost );


//router.post('/takeasurvey/:id',requireAuth,surveyController.takeAsurveyAndPost);



////////////////////////////////////////////////

router.get('/',surveyController.displaySurveyList );

router.get('/add',requireAuth,surveyController.displayCreateSurveyPage );

router.post('/add',surveyController.createSurvey);

router.post('/finalcreate',surveyController.finalCreate);


<<<<<<< HEAD
// GET the Survey Details page in order to edit an existing Book

router.get('/surveyview/:id',requireAuth,surveyController.createSurveyToView);

router.get('/:id',requireAuth,surveyController.createSurveyToEdit);

router.get('/statistics/:id',requireAuth,surveyController.statistics);

// POST - process the information passed from the details form and update existing survey
router.post('/:id',requireAuth,surveyController.updateSurvey);

//router.get('/createfile',surveyController.createFile);





 


// GET - process the delete by user id
router.get('/delete/:id',requireAuth, surveyController.deleteSurvey );







=======
  router.post('/add', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

    //declare id for item associated with CRUD request
    /* let a_survey = survey({
      "surveyName":req.body.surveyName,
      "startDate":req.body.startDate,
      "endDate":req.body.endDate,
      "surveyDescription":req.body.surveyDescription
    
  });

*/
  let formRequest = JSON.parse(JSON.stringify(req.body));

   
    for (var key in formRequest) {
     if (formRequest.hasOwnProperty(key)) {
       item = req.body[key];
  
       req.body[key]=item;
       console.log(key+ " " +item);
     }
   }
req.body.surveyName="Unknown";
   console.log(JSON.parse(JSON.stringify(req.body)));
   let a_survey2 = survey( formRequest);
survey.create(a_survey2,(err)=>
{
if(err)
{
  console.log(err);
  res.end(err);
}
else
{
  res.redirect('/surveys');
}

}); 

});


// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/
  
  //declare id for item associated with CRUD request
   let id=req.params.id;
   survey.findById(id,(err,surveys)=>{
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else
    {
        res.render('surveys/editsurvey',{
            title:'View and Edit Survey',survey:surveys
        });
    }
   });
  

});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/
  
  //declare id for item associated with CRUD request
   let id=req.params.id;


   let updatedSurvey = survey({
    "_id":id,
    "surveyName":req.body.name,
    "startDate":req.body.startDateField,
    "endDate":req.body.endDateField,
    "surveyDescription":req.body.surveyDescription
   }); 

   let updatedSurvey3 = survey({
    "_id":id,
    "surveyName":req.body.name,
    "startDate":req.body.startDateField,
    "endDate":req.body.endDateField,
    "surveyDescription":req.body.surveyDescription
   }); 


 let formRequest = JSON.parse(JSON.stringify(req.body));

 req.body._id=id;
   for (var key in formRequest) {
    if (formRequest.hasOwnProperty(key)) {
      item = req.body[key];
 
      req.body[key]=item;
      console.log(key+ " " +item);
    }
  }
  console.log(JSON.parse(JSON.stringify(req.body)));
  let updatedSurvey2 = survey( JSON.parse(JSON.stringify(req.body)));
   survey.updateOne({_id:id},updatedSurvey2,(err)=>
   {
       if(err)
{
   console.log(err);
   res.end(err);
}
else
{
   res.redirect('/surveys');
}
   }
   
   );

});


// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/

  //declare id for item associated with CRUD request
   let id=req.params.id;
   survey.remove({_id:id},(err)=>
   {
       if(err)
       {
           console.log(err);
   res.end(err);  
       }
       else{
           
   res.redirect('/surveys');
       }
   }


   );
});
>>>>>>> db9cc6315db30e32d2b3bd70115ddc60bea45c33
>>>>>>> 541e205932f39f64c4261dce5bba8dab26c0a162

  
  module.exports = router;