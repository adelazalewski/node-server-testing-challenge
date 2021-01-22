const express = require("express")
const todos = require("./todos-model")
const router = express.Router()

router.get("/todos", async(req, res, next) => {
    try{
const todoList = await todos.find()
res.status(200).json(todoList)
    }catch(err){
        next(err)
    }
})
router.post("/todos", async(req, res, next) => {
    try{
const newTodo = await todos.add({
    todo_item: req.body.todo_item,
    created_at: req.body.created_at
})
res.status(201).json(
    newTodo
)
    }catch(err){
        next(err)
    }
})
router.delete("/todos/:id", async(req, res, next) => {
    try{
        const todo = await todos.findByID(req.params.id)
        if(!todo){
            return res.status(404).json({
                message: "todo not found"
            })
        }else{
            await todos.remove(req.params.id)
            res.status(204)
        }

    }catch(err){
        next(err)
    }
})

module.exports = router