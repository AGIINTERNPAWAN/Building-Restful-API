const mongoose = require ('mongoose');
const FeedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    description: String,
    // name: {
    //     type: String,
    // },
    // email: {
    //     type: String,

    // },
    // subject: {
    //     type: String,
    // },
    // description: {
    //     type: String,
    // }
})

module.exports = mongoose.model('Feedback', FeedbackSchema);