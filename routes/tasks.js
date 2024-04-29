const express = require('express')
const router = express.Router()

const {getAllTasks,createTask,getTask,deleteTask,updateaTask} =  require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateaTask).delete(deleteTask)



module.exports = router 