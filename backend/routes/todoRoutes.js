const express = require('express')
const router = express.Router()
const {
  getTodos,
  setTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todoController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getTodos).post(protect, setTodo)
router.route('/:id').delete(protect, deleteTodo).put(protect, updateTodo)

module.exports = router
