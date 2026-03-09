const express = require("express");
const router = express.Router();
const { authMiddleware } = require('../middlewares/auth.middleware');
const { createTask, updateTask, getTasks, deleteTask } = require("../controllers/task.controller");

router.post("/tasks", authMiddleware, createTask);
router.put("/tasks/:id", authMiddleware,updateTask);
router.get("/tasks", authMiddleware, getTasks);
router.delete("/tasks/:id", authMiddleware, deleteTask);
module.exports = router;