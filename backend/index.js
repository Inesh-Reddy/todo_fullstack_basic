// write basic express boiler plate code 
// with express.json middle ware

const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require("./db");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());


app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Something wrong with your inputs"
        })
        return;
    }
    //mongoDB --> we need to give this to Db to create a todo
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed: false,
    })
    res.json({
        msg : "Todo created",
    })
})

app.get("/todos", async function(req,res){
    const todos = await todo.find({});
    res.json({
        todos,
    })
})

app.put("/completed", async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
    }
    await todo.updateOne({
        _id: req.body.id
    },{
        completed: true,
    })
    res.json({
        msg: "Todo updated",
    })

})

app.listen(3000, function(){
    console.log("Server is listening on port:3000");
})