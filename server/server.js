const http = require("http")

const server = http.createServer((req, res) => {
  // 设置CORS标头
  res.setHeader("Access-Control-Allow-Origin", "*") // 允许任何源
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET") // 允许的方法
  res.setHeader("Access-Control-Allow-Headers", "*") // 允许任何头
  res.setHeader("Content-Type", "application/json") // 设置响应类型

  if (req.method === "GET" && req.url === "/users") {
    const users = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
    ]

    res.statusCode = 200
    res.end(JSON.stringify(users))
  } else {
    res.statusCode = 404
    res.end()
  }
})

server.listen(3000, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3000/")
})
