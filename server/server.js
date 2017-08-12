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
var sampleData = require('./sampleData');


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




var trees = [{
  id: 1, // generated from the backend
  height: 20,
  color: 'forrest green',
  name: 'Redwood tree'
}, {
  id: 2,
  height: 20,
  color: 'red',
  name: 'apple tree'
}, {
  id: 3,
  height: 20,
  color: 'yellow',
  name: 'orange tree'
}]




app.get('/', function(request, response) {
  console.log('get request to /')
});

app.get('/api/get/comicbooks', function(request, response) {
  console.log('hi')
  response.send(sampleData);
  console.log('get request tp /api/get/comicbooks')
})

app.get('/api/sampleData', (request, response) => {
  console.log('get request to /api/sampleData')
    response.send(trees);
})
// emulates

app.post('/', function(request, response) {
  console.log('post request to / ' )

  response.send('posted to "/"'); // serving index.html
});

app.get('/api/trees', function(request, response) {
  console.log('get request to /api/trees')
  response.send(JSON.stringify(trees)) // sending stringified object
})

// POST /api/trees gets JSON bodies
app.post('/api/trees', function (request, response) {
  var body = request.body
  console.log('1body', body)
  if (!request.body) return response.sendStatus(400)
  // create user in req.body
  // the post must be sent as JSON from postman
  trees.push(body);
  response.send(body)
})


app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
