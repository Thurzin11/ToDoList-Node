const routes = require("express").Router();
const taskController = require("../controller/TaskController");

routes.get("/", taskController.getAllTasks);
routes.post("/create", taskController.createTask);
routes.get("/getById/:id/:method", taskController.getById);
routes.post("/update/:id", taskController.update);
routes.get("/delete/:id", taskController.deleteTask);
module.exports = routes;
