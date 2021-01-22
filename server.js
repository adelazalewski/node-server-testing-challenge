const express = require("express")
const server = express()
const todoRouter = require("./todos/todos-router")

server.use(express.json())
server.use(todoRouter)

server.use("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the tested todo API lol! Adela here! :)"
    })
})
server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server