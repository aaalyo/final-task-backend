import mongoose from 'mongoose';

//{"title": "string", "text": "string", "category": [123, 321]}
const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    images: {
        type: Array,        
    },

    thumbnail: {
        type: String,       
    }
})

const article = mongoose.model('Articles', articleSchema);

export default article