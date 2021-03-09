const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    contact_number: {
        type: ,
        required: truw
    }
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
  firstname: {type: String, required: true},
        lastname: {type: String, required: true},
        address: {type: String, required: true},
        phone: {type: Number, required: true},
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        type: {type: String, required:true}
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
