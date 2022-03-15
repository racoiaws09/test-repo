var express = require('express');
var app = express();




// app.get('/', function(req,res){
//   res.send('hello world')
// })

app.use(express.static(__dirname + '/public'));


var port = 5000;
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});


