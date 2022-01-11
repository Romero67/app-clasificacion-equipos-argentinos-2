const cheerio = require("cheerio");
const fs = require("fs");
const axios = require("axios");
const { fillTeams } = require("./fillTeams");

exports.getTeams = () => {

  const data = [];
  const names = [];
  const images = [];
  axios
    .get("https://www.futbolargentino.com/primera-division/tabla-de-posiciones")
    .then((res) => {
      if (res.status === 200 && res.statusText === "OK") {
        const $ = cheerio.load(res.data);
        $("td", "tbody").each(function (e) {
          data.push($(this).text().replace(/\s+/g, ""));
        });

        $("span", "tbody").each(function (e) {
          names.push($(this).text().trim());
        });

        $("img", "tbody").each(function (e) {
          images.push($(this).attr('data-src'));
        });

        fillTeams(data, names, images);
      }
    })
    .catch((err) => console.log(err));
};
