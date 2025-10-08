var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('data', { title: 'Dataset', name:''});
});

router.use(express.urlencoded({extended:true}))

router.post('/', function(req,res,next){
  res.render('data', {title:'Dataset', name: JSON.stringify(req.body.inputText)})
})

module.exports = router;
