const League = require("../models/league");

class LeagueRepository {
  async findAll() {
    return await League.find({});
  }
}

module.exports = new LeagueRepository();
