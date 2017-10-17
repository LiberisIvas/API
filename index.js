const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
// set up xpr app
const app = express();
// connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;
//carrying static files from public folder
app.use(express.static('public'));

app.use(bodyParser.json());
//initialize routes
app.use('/api', require ('./routes/api'));

//err handling
app.use(function(err, req, res, next) {
  res.status(422).send({error: err.message});
});
//npm install nodemon --save-dev
//npm install body-parser --save
//npm install mongoose --save

app.listen(process.env.port || 4000, function() {
  console.log('now listening for requests');
});
