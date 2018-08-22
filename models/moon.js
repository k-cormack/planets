let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Moon'


let schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'No description of this Moon available'
  },
  color: {
    type: String,
    enum: [
      'white',
      'yellow',
      'blue'
    ],
    required: true
  },
  moonId: {
    type: ObjectId,
    ref: 'Moon',
    required: true
  }
})

module.exports = mongoose.model(schemaName, schema)