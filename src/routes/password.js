import express from 'express';
import Username from '../models/Username.js';

const router = express.Router();


router.post('/', async (req, res) => {
    const data = {
        username: req.body.username,
        password: req.body.password,
    };
    try {        
        const query = Username.findOne({username: data.username});
        const user = await query.exec();
        if (data.password === user.password) {
            res.json({});
        } else {
            res.json({error: true, message: 'incorrect password'})
        }
    } catch(e) {
        res.json({error: true, message: 'error!!!'});
    }
});

export default router;