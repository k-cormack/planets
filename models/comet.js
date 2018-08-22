let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Comet'

let schema = new Schema({
    name: {
        type:String,
        required: true
    },
    description: {
        type: String,
        default: "No description for this Comet available"
    },
    cometId: {
        type: ObjectId,
        ref: 'Comet',
        required: true
    }
})

module.exports = mongoose.model(schemaName, schema)