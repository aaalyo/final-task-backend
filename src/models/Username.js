import mongoose from 'mongoose';

//{"title": "string", "text": "string", "category": [123, 321]}
const usernameSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,   
        required: true,       
    },
})

const username = mongoose.model('Username', usernameSchema);

export default username