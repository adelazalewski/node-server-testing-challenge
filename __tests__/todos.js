const request = require("supertest")
const server = require("../server")
const db = require("../data/config")
const todos = require("../todos/todos-model")

//to set the db back to where it was before we started changing it by running 
beforeEach(async() => {
    await db.seed.run()
})
// afterAll(async() => {
//     request(server).close();
    
// });
describe("todos endpoints integration tests and tdd dev", () => {
    test("get /todos", async() => {
        
const res = await request(server).get("/todos")
expect(res.status).toBe(200)
//console.log(res)
expect(res.type).toBe("application/json")
expect(res.body.length).toBe(5)
expect(res.body[0].todo_item).toBe("clean house")
    })

    it("tests post request to /todos", async() => {
        const todo = {
            todo_item: "cook dinner by 7",
            created_at: "2021-01-21"
        }
        const res = await request(server)
        .post("/todos")
        .send(todo)
     expect(res.status).toBe(201)
     expect(res.type).toBe('application/json')
    expect(res.body.todo_item).toBe("cook dinner by 7")


        // const newTodo = await todos.add(todo)
        
        // expect(res.body.todo_item).toBe("cook dinner by 7")
        // expect(res.type).toBe("application/json")
        // const res = await request(server).get("/todos")
        // expect(res.body.length).toBe(6)
        
        
        // expect(res.body.todo_item).toBe("cook dinner by 7")
    })

    it("tests the delete request to /todos", async() => {
        const res = await request(server)
        .delete("/todos/3")
        expect(res.status).toBe(204)
        
    })

    it("returns a 404 if todo is not found", async ( ) => {
        const res = await request(server).delete("/todos/50")
        expect(res.statusCode).toBe(404)
        expect(res.type).toBe("application/json")
        expect(res.body.message).toBe("todo not found")
    })

    it("tests for ")
})