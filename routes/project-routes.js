// routes/project-routes.js

const express = require('express');
const mongoose = require('mongoose');
const Project = require('../models/project-model');

const router  = express.Router();

// GET route => to get all the projects
router.get('/projects', (req, res, next) => {
  Project.find().populate('tasks')
    .then(allTheProjects => {
      res.json(allTheProjects);
    })
    .catch(err => {
      res.json(err);
    })
});

// POST route => to create a new project
router.post('/projects', (req, res, next)=>{
 
  Project.create({
    title: req.body.title,
    description: req.body.description,
    tasks: []
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
});

module.exports = router;