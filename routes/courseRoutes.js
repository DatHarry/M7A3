const express = require('express');
const courseController = require('../controllers/courseController');
const router = express.Router();

router
  .route('/')
  .get(courseController.getAllcourses)
  //.post(courseController.createCourse);

router
  .route('/:id')
  .get(courseController.getCourse)
  //.patch(courseController.updateCourse)
  //.delete(courseController.deleteCourse);

module.exports = router;