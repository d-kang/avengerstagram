// run server from compiled directory
//
// needs index.html
//
// need to write index.html in compiled older
//
// var bodyParser = require('body-parser');
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
//
// // app.get
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var sampleTreeData = require('./sampleData');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log('__dirname :', __dirname);
console.log('PWD :', process.env.PWD);
app.use(express.static(__dirname + '/../compiled'));


// app.get('/', function (req, res) {
//   res.render('/index');
// });

// app.get('/', function (req, res) {
//   res.render('index');
// });



app.get('/', function(request, response) {
  console.log('get request to /')
});
app.post('/', function(request, response) {
  console.log('post request to / ' )

  response.send('posted to "/"'); // serving index.html
});


app.get('/api/get/treeData', (request, response) => {
  console.log('get request to /api/get/sampleData')
  console.log('sampleTreeData', sampleTreeData)
    response.send(JSON.stringify(sampleTreeData));
})
// emulates


// POST /api/trees gets JSON bodies
app.post('/api/post/treeData', function (request, response) {
  var body = request.body
  console.log('1body', body)
  if (!request.body) return response.sendStatus(400)
  // create user in req.body
  // the post must be sent as JSON from postman
  sampleTreeData.push(body);
  response.send(body)
})


app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
