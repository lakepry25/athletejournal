const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    blogs: [
        {
            blog: {
                type: Schema.Types.ObjectId,
                ref: 'blogs'
            }
        }
    ],
    likes: [
        {
            blog: {
                type: Schema.Types.ObjectId,
                ref: 'blogs'
            }
        }
    ]
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);