const fetchData = require("./async")

it("returns hello world", async () => {
  const data = await fetchData()
  expect(data).toBe("hello world")
})
