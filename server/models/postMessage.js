import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    author: String,
    tags: [String], //Array of strings
    selectedFile: String, //Image encoded into string
    likeCount: {
        type: Number,
        default: 0
    },
    uploadDate: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;