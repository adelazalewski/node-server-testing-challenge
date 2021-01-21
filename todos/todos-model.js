const db = require("../data/config")

function add(todo){
    const [id] = db("todos").insert(todo)
    return findByID(id)
}
function findByID(id){
    return db("todos").where("id", id).first()
}
function find(){
    return db("todos")
}
function remove(id) {
    return db("todos").del().where("id", id)
}

module.exports = {
    find,
    findByID,
    add,
    remove
}