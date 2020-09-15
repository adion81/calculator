const express = require("express"),
    app = express(),
    cors = require('cors'),
    port = 8000,
    server = app.listen(port,() => console.log(`Listening on port ${port}`)),
    io = require("socket.io")(server)

io.on("connection",socket => {
    console.log(socket.id);
})