const express = require('express')
const app = express();
const server = require('http').Server(app);
const { v4: uuidv4 } = require('uuid');
app.set('view engine','ejs');



app.get('/:room',(req,res)=>{
    res.render("room", {roomId: req.params.room })
})




const PORT = process.env.PORT || 3030;

app.listen(PORT, console.log(`Listening on port ${PORT}!!!!.`)); 