const Team = require('./models/team')
const Script = require('./models/script')
const Log = require('./models/log')

module.exports = mongoose => ({
  Team: Team(mongoose),
  Script: Script(mongoose),
  Log: Log(mongoose),
})