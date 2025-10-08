var express = require('express');
var session = require('express-session')
var router = express.Router();

/* GET home page. */
router.use(session({
    secret: 'chave-secreta',
    resave: false,
    saveUninitialized: true
}));

router.get('/', function(req, res, next) {
  res.render('users', { title: 'Users' });
});

router.get('/signin', function(req,res,next){
  user = req.session.userId
  if(typeof user == 'undefined' || user == ':id'){
    res.redirect('//localhost:3000/users/signup')
  }
  else{
    res.send(`Bem-Vindo usuário ${req.session.userId}`)
  }
})

router.get('/user:id',function(req,res,next){
  id = req.params.id
  req.session.userId = id
  res.send(`usuario de ID: ${id}`)
}) 

router.get('/signup', function(req,res,next){
  res.send(`<h1> Olá, nós não temos um signup</h1><br>
    <h4>você terá que colocar um id no user:id para fazer signin</h4>`)
})

module.exports = router;
