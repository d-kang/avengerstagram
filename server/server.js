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
var mongoose = require('mongoose');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log('__dirname :', __dirname);
console.log('PWD :', process.env.PWD);
app.use(express.static(__dirname + '/../compiled'));

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});

// app.get('/', function (req, res) {
//   res.render('/index');
// });

// app.get('/', function (req, res) {
//   res.render('index');
// });









// create a database called trees
mongoose.connect('mongodb://localhost/api-trees', {
  useMongoClient: true
});

var Schema = mongoose.Schema;

//Create the schema for our table
var userSchema = new Schema({
  height: Number,
  color: String,
  name: String
});

//Create table with name User
var Tree = mongoose.model('Tree', userSchema);

// Tree.create({height: 20, color: 'black-oak', name: 'honey-apple'});

var db = mongoose.connection;

db.on('error', (err) => {
  console.log('=---------------------------=')
  console.log('connection error', err);
});

db.once('open', () => {
  console.log('=---------------------------=mongo db open connected.');
});








app.get('/', function(request, response) {
  console.log('get request to /')



});
app.post('/', function(request, response) {
  console.log('post request to / ' )

  response.send('posted to "/"'); // serving index.html
});


app.get('/api/get/treeData', (request, response) => {
  // console.log('get request to /api/get/sampleData')
  // console.log('sampleTreeData', sampleTreeData)
  //   response.send(JSON.stringify(sampleTreeData));
  Tree.find({}, function(err, result){
    if(err){
      console.log(err);
      return err;
    }
    if (result) {
      // console.log('result: ', result);
      response.send(JSON.stringify(result))
    }

  });
})
// emulates


// POST /api/trees gets JSON bodies
app.post('/api/post/treeData', function (request, response) {
  var body = request.body
  console.log('1body', body)
  var { height, color, name } = body;
  console.log(1, height, color, name)
  if (!request.body) return response.sendStatus(400)
  // create user in req.body
  // the post must be sent as JSON from postman
  // sampleTreeData.push(body);
  // {height: 20, color: 'black-oak', name: 'honey-apple'}

  height = 0;
  Tree.create({height, color, name});
  response.send(body)
})
