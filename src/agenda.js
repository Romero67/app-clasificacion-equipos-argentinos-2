const Agenda = require('agenda');
const { getTeams } = require('./futbolargentino.com/main');
const config = require('./config');

const agenda = new Agenda({ db: { address: `mongodb+srv://motorkai:U4DfQrg32h3sX!i@cluster0.fredy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority` } });

agenda.define('sendGetTeams', function(job) {
 getTeams();
});

agenda.on('ready', function() {
 agenda.every(config.TIME_GET_TEAMS, 'sendGetTeams');
 agenda.start(); 
});