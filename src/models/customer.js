const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
//define structure with name and induster or any extra
    name: {
        type: String,
        required: true
    },
    industry: String
});
//Where you want to say what collection you want to go in, eg customers
// module.exports = mongoose.model('Customer', customerSchema);
module.exports = mongoose.model('clients', customerSchema);