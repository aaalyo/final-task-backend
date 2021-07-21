import mongoose from 'mongoose';

//{"title": "string", "text": "string", "category": [123, 321]}
const messageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        
    },
    
    isAnswer: {
        type: Boolean,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const message = mongoose.model('Messages', messageSchema);

export default message