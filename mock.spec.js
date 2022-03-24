const {
  interateEachItem,
  runForLowNumber,
  DataServiceInstance,
  mockFunctions,
  FruitsService,
} = require("./mock")

it("runs callback for array of numbers", () => {
  const mockCallback = jest.fn((x) => 42 + x)
  interateEachItem([0, 1], mockCallback)

  expect(mockCallback.mock.calls.length).toBe(2)
  expect(mockCallback).toBeCalledWith(1)
  expect(mockCallback).toBeCalledTimes(2)
})

describe("Jest fn()", () => {
  const mockCallback = jest.fn()

  it("runs callback for number <100", () => {
    runForLowNumber(10, mockCallback)

    expect(mockCallback).toBeCalled()
    expect(mockCallback).toBeCalledTimes(1)
    expect(mockCallback).toBeCalledWith(50)
  })

  it("does not run callback for number >100", () => {
    runForLowNumber(25, mockCallback)

    expect(mockCallback).not.toBeCalled()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })
})

it("returns true when running callback", () => {
  const mockCallback = jest.fn(() => true)

  runForLowNumber(5, mockCallback)

  expect(mockCallback()).toBe(true)
})

describe("Jest spyOn()", () => {
  it("calls spied functions", async () => {
    const mockRequest = jest.spyOn(mockFunctions, "fetchData")
    const mockStore = jest.spyOn(mockFunctions, "storeData")

    await DataServiceInstance.getData(15)

    expect(mockRequest).toBeCalledWith(15)
    expect(mockStore).toBeCalledWith("apple")
  })
})

describe("Jest mock() without changes", () => {
  jest.mock("./mock-hooks")

  it("returns banana and apple", () => {
    expect(FruitsService.giveMeApple()).toEqual("apple")
    expect(FruitsService.giveMeBanana()).toEqual("banana")
  })
})

// It is not working
// describe("Jest mock() with changed hooks", () => {
//   jest.mock("./mock-hooks", () =>
//     jest
//       .fn()
//       .mockImplementation(() => ({ passApple: jest.fn(() => "not apple") }))
//   )

//   jest.mock("./mock-hooks")
//   FruitsService.mockImplementation(() => ({
//     passApple: () => "not apple",
//   }))

//   it("returns 'not apple'", () => {
//     expect(FruitsService.giveMeApple()).toEqual("not apple")
//   })
// })
