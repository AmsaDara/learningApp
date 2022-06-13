const express = require('express');
const router = express.Router();
const Course = require('../datalayer/models/course.schema');
const courseService = require('../services/course.service')(Course);
const validateStudent = require('../helpers/student.validations').validateStudent

/* GET courses listing. */
router.get('/allcourse',validateStudent, async function(req, res, next) {
    try {
        let response = await courseService.getFeaturedCourse();
        res.json(response);
      } catch (error) {
        next(error)
      }
});



router.get('/nonfeatured', async function(req, res, next) {
    try {
        let response = await courseService.getNonFeatureCourse();
        res.json(response);
      } catch (error) {
        next(error)
      }
});

router.post('/', async function(req, res, next) {
  const course = req.body;
  try {
      let response = await courseService.addNewCourse(course);
      res.json(response);
    } catch (error) {
      next(error)
    }
});

module.exports = router;

