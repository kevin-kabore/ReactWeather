var express = require('express');

//Create app
var app = express();
const PORT = process.env.PORT || 3000

app.use(function (req, res, next){
  if (req.headers('x-forwarded-proto') === 'http'){
    next();
  } else {
    res.redirect('https://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Express server listening on port ' + PORT);
});
