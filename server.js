const express = require('express')
const app = express();
const server = require('http').server(app);







const PORT = process.env.PORT || 3030;

app.listen(PORT, console.log(`Listening on port ${PORT}!!!!.`)); 