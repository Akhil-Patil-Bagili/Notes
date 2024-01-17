const mongoose = require('mongoose');

mongoose.connect("");

const noteSchema = mongoose.Schema({
    title: String,
    description: String
})

const note = mongoose.model('notes', noteSchema)

module.exports={
    note
}