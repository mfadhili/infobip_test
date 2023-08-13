const express = require('express');
var bodyParser = require('body-parser');


const app = express();
const port = 8005;

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/invoke',function(req,res) {
    console.log('receiving data ...');
    console.log('body is ', req.body);
    res.send(req.body);
})

app.listen(port,() =>{
    console.log('Server started! At http://localhost:' + port)
})