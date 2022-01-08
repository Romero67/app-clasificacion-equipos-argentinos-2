const Agenda = require('agenda');
const { getTeams } = require('./futbolargentino.com/main');
const config = require('./config');

const agenda = new Agenda({ db: { address: config.DATABASE_AGENDA } });

// agenda.define('sendGetTeams', function(job) {
 
// });

// agenda.on('ready', function() {
//  agenda.every(config.TIME_GET_TEAMS, 'sendGetTeams');
//  agenda.start(); 
// });