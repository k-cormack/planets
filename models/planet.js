let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Planet'


let schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'No description for this Planet available'
  },
  size: {
    type: String,
    enum: [
      'small',
      'large',
      'massive'
    ],
    required: true
  },
  starId: {
    type: ObjectId,
    ref: 'Star',
    required: true
  }
})

module.exports = mongoose.model(schemaName, schema)