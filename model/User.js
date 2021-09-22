const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    Pin: Number,
    account_number: Number,
    accoun_name: String
})
const user = mongoose.model('User', userSchema);
module.exports = userSchema