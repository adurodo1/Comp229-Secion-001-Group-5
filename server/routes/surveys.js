let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the survey model
let survey = require('../models/survey');

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
  
  });

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
  
  
  });

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

  
  module.exports = router;