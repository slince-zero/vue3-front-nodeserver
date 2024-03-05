import axios from "axios"
const server = axios.create({
  baseURL: "/api",
})
export const getUsers = () => {
  const data = server.get("/users")
  return data
}
