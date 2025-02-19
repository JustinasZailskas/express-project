const League = require("../models/league");
const leagueService = require("../services/leagueService");

exports.getAllLeagues = (req, res) => {
  leagueService.getAllLeagues().then((leagueItems) => {
    if (!leagueItems) {
      throw new Error("Elementai nerasti", 404);
    }
    console.log(leagueItems);
    res.json(leagueItems);
  });
};
