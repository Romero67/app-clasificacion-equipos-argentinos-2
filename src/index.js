const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const {engine, create} = require('express-handlebars');
const config = require('./config');
const { getTeams } = require('./futbolargentino.com/main');
const Team = require('./models/team.model')


//use the libs
require('dotenv').config();
const app = express();

//use middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//handlebars helpers
const hbs = create({
 helpers: {
  isAsc: function(pos, options){
   if(pos < 5){
    return options.fn(this);
   }
  },
  isDesc: function(pos, options){
   if(pos > 22){
    return options.fn(this);
   }
  }
 }
})

//setting handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

//connect to database 
mongoose.connect(config.MONGODB_URI,{
 useNewUrlParser: true,
 useUnifiedTopology: true
}).then(() => console.log('connect to database success'))
.catch(() => 'ERROR TO DATABASE');

//get info of futbolargentino.com, 20 sec
setInterval(getTeams, config.TIME_GET_TEAMS);

//routes setup
app.get('/', (req, res) => {
 Team.find({}).lean().exec((err, data) => {
  if(err){
   console.log('err')
  }
  res.render('index', {teams: data[0].teams})
 })
});

//static files
app.use(express.static(path.join(__dirname, "public")));

//listen to port
app.listen(config.PORT, () => console.log(`server on port ${config.PORT}`));