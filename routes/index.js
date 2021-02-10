var express = require('express');
var router = express.Router();
var distanceInWords = require('date-fns/formatDistanceToNow')
let messages = [
  {
    text: 'Good morning Julia',
    user: 'Charles',
    added: new Date()
  },
  {
    text: 'Some Fresh Poutine',
    user: 'Norm Summerton',
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages, format: distanceInWords });
});

router.get('/new', function(req, res, next) {
  res.render('form',)
});

router.post("/new", function (req, res) {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
