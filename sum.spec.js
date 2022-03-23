const sum = require("./sum")

it("returs 3 when passing 1 and 2 to sum function", () => {
  expect(sum(1, 2)).toBe(3)
})

it("returs number bigger than 3 when passing 1 and 3 to sum function", () => {
  expect(sum(1, 3)).toBeGreaterThan(3)
})

it("assigns properites properly", () => {
  const data = { one: 1 }
  data["two"] = 2
  expect(data).toEqual({ one: 1, two: 2 })
})

it("includes /stop/", () => {
  expect("Christopmas").toMatch(/stop/)
})

shoppingList = ["orange", "apple", "milk"]

it("includes milk", () => {
  expect(shoppingList).toContain("milk")
})
