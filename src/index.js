const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const {engine} = require('express-handlebars');
const config = require('./config');
const { getTeams } = require('./futbolargentino.com/main');



//use the libs
require('dotenv').config();
require('./agenda');
const app = express();

//use middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//setting
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));


//connect to database process.env.MONGODB_ATLAS
mongoose.connect('mongodb+srv://motorkai:U4DfQrg32h3sX!i@cluster0.fredy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&ssl=true',{
 useNewUrlParser: true,
 useUnifiedTopology: true
}).then(() => console.log('connect to database success'));

getTeams();

//routes setup
app.get('/', require('./routes/index.routes'));

//static files
app.use(express.static(path.join(__dirname, "public")));

//listen to port
app.listen(config.PORT, () => console.log(`server on port ${config.PORT}`));