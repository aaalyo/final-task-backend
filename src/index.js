import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import articleRoutes from './routes/articles.js';
import categoryRoutes from './routes/categories.js';
import chatRoutes from './routes/messages.js';
import usernameRoutes from './routes/password.js';

import cors from 'cors';

dotenv.config();

const server = express();

server.options('*', cors());
server.use(cors());

server.use(bodyParser.json());

server.use('/articles', articleRoutes);
server.use('/categories', categoryRoutes);
server.use('/chat', chatRoutes);
server.use('/username', usernameRoutes);


mongoose.connect(process.env.MONGOOSE_CONNECTION_URL, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if (err) {
            console.error(`Could not connect to the database: ${err}`);
            return;
        }
        console.log('Database is up and running');
        
    });

server.listen(process.env.PORT, () => {
    console.log(`Server is up and running on port ${process.env.PORT}`)
});