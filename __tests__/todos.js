const request = require("supertest")
const server = require("../server")

//to set the db back to where it was before we started changing it by running 
beforeEach(async() => {
    await db.seed.run()
})
describe("todos endpoints integration tests and tdd dev", () => {
    test("get /todos", async() => {
const res = await request(server).get("/todos")
expect(res.status).toBe(200)
expect(res.type).toBe("application/json")
expect(res.body.length).toBe(5)
expect(res.body[0].todo_item).toBe("clean house")
    })
})
