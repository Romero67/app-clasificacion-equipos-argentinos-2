const { Exception } = require("handlebars");
const Team = require("../models/team.model");

exports.fillTeams = async (data, names, images) => {
  var numberName = 0;
  var numberImage = 0;
  const teams = [];

  for (let i = 0; i < 26; i++) {
    const team = {
      pos: parseInt(data[parseInt(i.toString() + 0)]),
      pj: data[parseInt(i.toString() + 2)],
      g: data[parseInt(i.toString() + 3)],
      e: data[parseInt(i.toString() + 4)],
      p: data[parseInt(i.toString() + 5)],
      gf: data[parseInt(i.toString() + 6)],
      gc: data[parseInt(i.toString() + 7)],
      dg: data[parseInt(i.toString() + 8)],
      pts: data[parseInt(i.toString() + 9)],
    };

    team.name = names[numberName];
    team.short_name = names[numberName + 1];
    numberName += 2;

    team.url = images[numberImage];
    numberImage++;

    teams.push(team);
  }

  function SortArray(x, y) {
    if (x.pos < y.pos) {
      return -1;
    }
    if (x.pos > y.pos) {
      return 1;
    }
    return 0;
  }
  const orderenTeams = teams.sort(SortArray);

  const count = await Team.estimatedDocumentCount();

  if (count <= 0) {
    const newTeams = new Team({ teams: orderenTeams });
    await newTeams.save((err, data) => {
      if (err) {
        throw new Exception("An error ocurried while saving the teams");
      }
      console.log("teams loaded");
    });
  } else {
    await Team.findOneAndUpdate({}, { teams: orderenTeams })
      .then(() => console.log("teams update loaded"))
      .catch((err) => console.log(err));
  }
};
