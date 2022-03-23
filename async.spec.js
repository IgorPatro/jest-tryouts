const fetchData = require("./async")

const expectedTodo = {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false,
}

it("returns array of todos", async () => {
  const data = await fetchData()

  expect(data).toBeDefined()
  expect(data).toEqual(expect.arrayContaining([expectedTodo]))

  // expect(data).toMatchObject(todoModel)
})
