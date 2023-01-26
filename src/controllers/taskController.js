const taskModel = require('../models/taskModel')


const createTask = async function (req, res) {
    try {
        let data = req.body;
        const task = await taskModel.create(data)
        return res.status(201).send({status:true,message:"created todo list",data:task})

    }catch(err){
        return res.status(500).send({ status: false, message: err.message });
    }
  };


  const getTask = async function(req,res){
  try{
       let data =req.body 
     const tasks = await taskModel.find()
     return res.status(200).send({status:true,message:"get task list successfully",data:tasks})
  }catch(err){
        return res.status(500).send({ status: false, message: err.message });
    }
  }

  const updateTask =async function(req,res){
   try{
    let data = req.body
    let TaskId = req.params.TaskId
   let  updatedtask = await taskModel.findOneAndUpdate({TaskId:TaskId},data)
    return res.status(200).send({status:true,message:"task updated successfully",data:updatedtask})
}catch(err){
    return res.status(500).send({ status: false, message: err.message });
}
  }

  const deleteTask = async function(req,res){
    try{
        const taskId = req.params.taskId
        let deletedTask = await taskModel.findByIdAndDelete({_id:taskId})
        return res.status(200).send({status:true,message:"delete successfully"})
              
    }catch(err){
    return res.status(500).send({ status: false, message: err.message });
}
  }



  module.exports ={createTask,getTask,updateTask,deleteTask}