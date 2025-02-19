const League = require("../models/league");
const leagueService = require("../services/leagueService");

exports.getAllLeagues = (req, res) => {
  leagueService.getAllLeagues(req._id.toString()).then((leagueItems) => {
    if (!leagueItems) {
      throw new Error("Elementai nerasti", 404);
    }
    res.json(leagueItems);
  });
};
