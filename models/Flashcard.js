const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

const flashcardSchema = new mongoose.Schema({
    front: {
        type: String,
        trim: true,
        required: 'Please enter a word for the front of the card!'
    },
    back: {
        type: String,
        trim: true,
        required: 'Please enter a word for the back of the card!'
    }
})

module.exports = mongoose.model('Flashcard', flashcardSchema)