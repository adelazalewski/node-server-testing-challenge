const express = require("express")
const todos = require("./todos-model")
const router = express.Router()

router.get("/todos", async(req, res, next) => {
    try{

    }catch(err){
        next(err)
    }
})


module.exports = router