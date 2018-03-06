const { Schema, SchemaTypes } = require('mongoose')
const uuid = require('node-uuid')

const TeamSchema = new Schema({
  name: { type: String, required: true, unique: true },
  latestScript: { type: SchemaTypes.ObjectId, ref: 'Script' },
  admin: { type: Boolean, default: false },
  token: { type: String, default: uuid.v4(), index: true }
})

module.exports = m => m.model('Team', TeamSchema)