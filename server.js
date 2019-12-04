const express = require('express')
const app = express();
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var url = require('./config').url;
var db = mongoose.connection;
const routes = require('./backend/Routes/index');
const passportSeupt = require('./passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passportSeupt.initialize());


const port = process.env.PORT || 5000;

mongoose.set('useNewUrlParser', true);

mongoose.connect(url, { useUnifiedTopology: true });
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  app.listen(port, () => console.log(`server running on port ${port}`));
  console.log("Mongoose is conected!");

  app.use('/', routes);
});