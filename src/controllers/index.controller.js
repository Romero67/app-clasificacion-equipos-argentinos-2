const Team = require('../models/team.model')

exports.renderIndex = async(req, res) => {
 const teamsFind = await Team.find({})
 .lean();

 const teams = teamsFind.map((e,i) => {
  if(e.pos<4){
   e.asc = true;
   e.desc = false;
  }else if(e.pos>21){
   e.asc = false;
   e.desc = true;
  }
  else{
   e.asc = false;
   e.desc = false;
  }
  return e;
 }).sort(function(a, b){return a.pos - b.pos});

 res.render('index', {teams})

}