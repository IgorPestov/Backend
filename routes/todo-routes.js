const express = require("express");
const router = express.Router();
const controllers = require("../controllers/todo-controller")

router.get("/todos", controllers.getTodos);
router.post("/todos", controllers.postTodos);
router.put("/todos/:id", controllers.putTodos);
router.delete("/todos/:id", controllers.deleteTodos);

module.exports = router;




