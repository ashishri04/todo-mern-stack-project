const express =require("express")
const router = express.Router();
const taskController = require('../controllers/taskController')

router.post('/create',taskController.createTask)

router.get('/getTask',taskController.getTask)

 router.put('/updateTask/:taskId',taskController.updateTask)


 router.delete('/delete/:taskId',taskController.deleteTask)


module.exports = router