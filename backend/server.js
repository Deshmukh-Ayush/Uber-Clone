import http from "http"
import app from "./app.js"

const PORT = 3000 || process.env.PORT

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})