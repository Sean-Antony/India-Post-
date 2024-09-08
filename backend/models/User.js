const mongoose = require('mongoose');
<<<<<<< HEAD

const userSchema = new mongoose.Schema({
    userid: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
=======
const { v4: uuidv4 } = require('uuid');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userID: {
        type: String,
        required: true,
        default: function() {
            return uuidv4();
        },
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
>>>>>>> 8985b8d1f65d5fed4506bc653c3ef7ed15c166da
