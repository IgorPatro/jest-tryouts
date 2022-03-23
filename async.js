const fetchData = async () => {
  await new Promise(() => setTimeout(() => "nothing", 2000))
  return "hello world"
}

module.exports = fetchData
