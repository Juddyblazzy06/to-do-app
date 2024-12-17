const express = require('express');
const { getTasks, createTask, updateTask, deleteTask, getTask } = require('../controllers/taskController');
const authenticate = require('../middlewares/authMiddleware');
const router = express.Router();

// Apply authentication middleware to all task routes
router.use(authenticate);

// Task routes
router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.get('/:id', getTask)


module.exports = router;


 