const express = require('express');
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended: true}))
const PORT = 3000;

path = require('path');

app.listen(PORT, () =>{
    console.log(`Hello API na porta ${PORT}`)
})
app.use(express.urlencoded({extended: true}))

app.get('/', function(req,res,next){
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/v1/hi', function(req,res, next){
    const out = {
        msg: "hello, world",
        endpoint: `/v1/hi`
    }
    res.status(200).json(out)
    console.log(out)
})

app.post('/v2/:nome/:email/:lang', function(req,res,next){
    nome = req.body.name;
    email = req.body.email;
    lang = req.body.lg;
    
    if (lang == "pt-br"){
        const out = {
        msg: `olá, ${nome}!`,
        email:`seu e-mail é ${email}`
        }
        res.status(200).json(out)
    }
    if(lang == "en"){
        const out = {
        msg: `Hello, ${nome}`,
        email:`Your e-mail is ${email}`
    }
    res.status(200).json(out)
    }

    if(lang == "es"){
        const out = {
        msg: `Hola, ${nome}`,
        email: `tu correo electrónico es ${email}`
    }
    res.status(200).json(out)
    }
    
})

app.get('/v1/tempo', function(req,res,next){
    const out = {
        data: new Date(),
    }
    res.json(out)
})