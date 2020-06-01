const  mongoose = require('mongoose');

const todoSchema = new mongoose.Schema ({
    task: {
        type: String,
        unique: false,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    color: {
        type: String,
    },
    edit: {
        type: Boolean,
        default: true,
    },
})

const todoModel = mongoose.model('Todo', todoSchema)

module.exports  = todoModel