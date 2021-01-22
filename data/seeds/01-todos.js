exports.seed =async function(knex) {
  await knex("todos").truncate()
  await knex("todos").insert([
    {todo_item: "clean house", created_at: "2018-01-05"},
    {todo_item: "clean fridge", created_at: "2018-01-05"},
    {todo_item: "clean bathroom", created_at: "2018-01-05"},
    {todo_item: "finish project", created_at: "2018-01-05"},
    {todo_item: "meal plan", created_at: "2018-01-05"}
  ])
 };

