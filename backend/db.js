// mongodb+srv://ineshreddy007:E3t3yxnQufxMYFGF@todo-app.81huk1d.mongodb.net/todos

/* 
mogoDb schema

Todo {
    title: String,
    description: String,
    completed: Boolean,
}*/

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ineshreddy007:E3t3yxnQufxMYFGF@todo-app.81huk1d.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo: todo,
}