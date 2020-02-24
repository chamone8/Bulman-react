const express = require('express');
const Task = express.Router();
const controller = require('../controllers/Task');

Task.route('/')
.post(controller.add)
.get(controller.getAll);

Task.route('/:id')
.get(controller.getById)
.delete(controller.delete)
.put(controller.Update);

module.exports = Task;