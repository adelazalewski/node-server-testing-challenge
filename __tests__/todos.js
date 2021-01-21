const request = require("supertest")
const server = require("../server")

//to set the db back to where it was before we started changing it by running 
beforeEach(async() => {
    await db.seed.run()
})