const express = require("express");
const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes");
const healthRoutes = require("./routes/healthRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);
app.use("/", healthRoutes); // 👈 important

module.exports = app;
