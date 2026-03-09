require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors");
const database = require("./database/database");
const taskModel = require("./models/task.model");
const taskRoutes = require("./routes/task.routes");
const userModel = require("./models/user.model");
const userRoutes = require("./routes/user.routes");

// CORS errors handling
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "OPTIONS", "HEAD", "PATCH", "DELETE"],
  allowedHeaders: ["Accept", "Content-Type", "Authorization", "device"],
  credentials: true,
};

// Middlewares
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/task", taskRoutes);
app.use("/user", userRoutes);

app.listen(3000, () => {
    database.sync();
    console.log('Server started on port 3000');
});