
exports.up =async function(knex) {
  await knex.schema.createTable("todos", (tbl) => {
      tbl.increments("id")
      tbl.text("todo_item").notNull().unique()
      tbl.date("created_at").notNull().defaultTo(knex.raw("current_timestamp"))
  })
};

exports.down =async function(knex) {
  await knex.schema.dropTableIfExists("todos")
};
