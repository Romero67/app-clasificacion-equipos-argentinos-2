const Team = require('../models/team.model')

exports.renderIndex = async(req, res) => {
 const teamsFind = await Team.find({})
 .lean();

 const teams = teamsFind.map((e,i) => {
  if(i<4){
   e.asc = true;
   e.desc = false;
  }else if(i>21){
   e.asc = false;
   e.desc = true;
  }
  else{
   e.asc = false;
   e.desc = false;
  }
  return e;
 })
 res.render('index', {teams})

}