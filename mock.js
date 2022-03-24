const { passBanana, passApple } = require("./mock-hooks")

const interateEachItem = (items, callback) => {
  for (let index = 0; index < items.length; index++) {
    callback(items[index])
  }
}

const runForLowNumber = (number, callback) => {
  const multipliedNumber = number * 5

  if (multipliedNumber < 100) {
    callback(multipliedNumber)
  }
}

const mockFunctions = {
  fetchData: (id) => Promise.resolve({ data: "apple" }),
  storeData: (data) => console.log(data),
}

class DataService {
  getData(id) {
    mockFunctions.fetchData(id).then((res) => mockFunctions.storeData(res.data))
  }
}

const DataServiceInstance = new DataService()

class FruitsService {
  static giveMeBanana() {
    return passBanana()
  }
  static giveMeApple() {
    return passApple()
  }
}

module.exports = {
  interateEachItem,
  runForLowNumber,
  mockFunctions,
  DataServiceInstance,
  FruitsService,
}
