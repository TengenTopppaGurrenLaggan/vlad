// index.js
const http = require('http')
//const hostname '127.0.0.1'
const hostname= herokuapp.com
const port = thawing-citadel-21048.
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hi there!\n')
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
