import mongoose from 'mongoose';

//{"title": "string"}

const categorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },    
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const category = mongoose.model('Category', categorySchema);

export default category;