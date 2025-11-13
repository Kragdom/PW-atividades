const axios = require('axios');
express = require('express');
app = express();
PORT = 3000;

app.listen(PORT, ()=> console.log("porta ouvindo"));
app.use(express.urlencoded({extended: true}));

axios({
    method: 'post',
    url: '/user/12345',
    data: 'name: bananarama'
})

axios.get('/user?ID=12345')
.then(function (response) {
console.log(response);
 })
 .catch(function (error) {


console.log(error);
})
.finally(function () {
    console.log("banana")
});

const API_URL = 

app.get('/', function(req,res,next){
    res.render('<h1> deu certo </h1>')
})