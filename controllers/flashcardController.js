const mongoose = require('mongoose')
const Flashcard = mongoose.model('Flashcard')

exports.create = async (req, res) => {
    // const flashcard = await (new Flashcard(req.body)).save()
    // res.json(flashcard)
    console.log(req)
    res.json({testing: "did it work"})
}