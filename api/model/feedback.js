const mongoose = require ('mongoose');
const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,

    },
    subject: {
        type: String,
    },
    description: {
        type: String,
    }
})

module.exports = mongoose.model('feedback', feedbackSchema);