const express = require('express');
var bodyParser = require('body-parser');
var {Infobip, AuthType} = require("@infobip-api/sdk/")


const app = express();
const port = 8005;

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/invoke',function(req,res) {
    console.log('receiving data ...');
    console.log('body is ', req.body);
    console.log('\n Checking results');
    console.log(req.body.results[0]);
    console.log('\n Checking message');
    console.log(req.body.results[0].message);


    res.send(req.body);
})

let infobip = new Infobip({
    baseUrl: "zjpnwk.api.infobip.com",
    apiKey: "2a2fbf8a5d74d4c46a32de9bcab9b53d-0ab86c65-607e-48d0-9be2-93c0d4486eaa",
    authType: AuthType.ApiKey,
});

app.post('/send', async function (req, res) {
    let response = await infobip.channels.whatsapp.send({
        type: "text",
        from: "447860099299",
        to: "254742764377",
        content: {
            text: "Hello World",
        },
    });

    console.log(response);

})


app.listen(port,() =>{
    console.log('Server started! At http://localhost:' + port)
})