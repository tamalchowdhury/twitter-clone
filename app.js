const express = require('express');
const app = express();
const moment = require('moment');

// Mongo Database
const mongoose = require('mongoose');
const mongoDB = ''; // Add your mongoDB driver url below
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

mongoose.connection.on('error', (err) => console.log(err));

// View engine
app.set('views', (__dirname + '/views'));
app.set('view engine', 'pug');

// Public folder
app.use(express.static(__dirname + '/public'));

// Body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

// Routes
const routes = require('./routes');
app.use('/', routes);

app.listen(3000, () => console.log('We have a server running!'));
