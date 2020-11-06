const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({ 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
 });

 module.exports = Blog = mongoose.model('blog', BlogSchema);