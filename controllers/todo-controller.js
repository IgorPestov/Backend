const db = require("../models");

function success(res, payload) {
    return res.status(200).json(payload);
}

exports.getTodos = async (req, res, next) => {
    console.log( 'WE HERE')
    try {
        const todos = await db.Todo.find({});
        return success(res, todos);
    } catch (err) {
        next({status: 400, message: "failed to get todos"});
    }
}

exports.postTodos = async (req, res, next) => {
    try {
        const todo = await db.Todo.create(req.body);
        console.log(req.body);
        return success(res, todo);
    } catch (err) {
        next({status: 400, message: "failed to create todo"});
    }
}

exports.putTodos = async (req, res, next) => {
    console.log("WE HERE2")
    try {
        const todo = await db.Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return success(res, todo);
    } catch (err) {
        next({status: 400, message: "failed to update todo"});
    }
}
exports.deleteTodos = async (req, res, next) => {
    console.log("WE HERE3")
    try {
        await db.Todo.findByIdAndRemove(req.params.id);
        return success(res, "todo deleted!");
    } catch (err) {
        next({status: 400, message: "failed to delete todo"});
    }
}



