import express from 'express';
import Message from '../models/Message.js'

const router = express.Router();

// GET /messages - returns list of all the messages
// POST /messages - create a new article. {"name": "string", "text": "string", "isAnswer": false }


router.get('/', async (req, res) => {
    try {
        const query = Message.find({});
        const messages = await query.exec()
        res.json(messages);
    } catch (e) {
        res.json({ error: true, message: e })
    }
});

router.post('/', async (req, res) => {
    const newMessageData = {
        name: req.body.name,
        text: req.body.text,
        isAnswer: req.body.isAnswer,
    };
    const message = new Message(newMessageData);
    try {
        const messageEntity = await message.save();
        res.json(messageEntity);
    } catch (e) {
        res.json({ error: true, message: e })
    }

});


export default router;