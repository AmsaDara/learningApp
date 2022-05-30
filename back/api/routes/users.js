const express = require('express');
const { validate } = require('../datalayer/models/student.schema');
const router = express.Router();
const Student = require('../datalayer/models/student.schema');
const studentService = require('../services/student.service')(Student);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({user:'Ok'});
});

router.post('/register',async (req,res,next)=>{
  const {... _student}=req.body;
  try {
    let response = await studentService.register(_student);
    res.json(response);
  } catch (error) {
    next(error)
  }
})

router.post('/authenticate', async function (req,res,next) {
    try {
      let {email,password} = req.body;
      res.json(await studentService.authenticate(email,password));
    } catch (error) {
      next(error)
    }
});

module.exports = router;

