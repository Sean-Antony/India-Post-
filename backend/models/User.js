const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userID: {
        type: String,
        
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

UserSchema.pre('save', function(next) {
    if (!this.userID) {
        this.userID = uuidv4();
    }
    next();
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;