const taskModel = require("../models/task.model");

const createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const task = await taskModel.create({ title, description, status });
        res.status(201).json({status:201, message: "success", data:task});
    } catch (error) {
        res.status(500).json({ status:500, message: error.message });
    }
};

const updateTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const {id} = req.params;
        const existingTasks = await taskModel.findOne({ where: { id } });
        if(!existingTasks){
            return res.status(404).json({status:404, message: "Task not found"});
        }
        const task = await taskModel.update({ title, description, status }, { where: { id } });
        res.status(201).json({status:201, message: "success", task});
    } catch (error) {
        res.status(500).json({ status:500, message: error.message });
    }
};

const getTasks = async (req, res) => {
    try {
        const tasks = await taskModel.findAll();
        res.status(200).json({status:200, message: "success", tasks});
    } catch (error) {
        res.status(500).json({ status:500, message: error.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const existingTasks = await taskModel.findOne({ where: { id } });
        if(!existingTasks){
            return res.status(404).json({status:404, message: "Task not found"});
        }
        const task = await taskModel.destroy({ where: { id } });
        res.status(200).json({status:200, message: "success", task});
    } catch (error) {
        res.status(500).json({ status:500, message: error.message });
    }
};

module.exports = { createTask, updateTask, getTasks, deleteTask};