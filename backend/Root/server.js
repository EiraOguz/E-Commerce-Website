import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from '../Api/AuthRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.listen(4000, () => {
    console.log("Connected to port 4000")
});

app.use('/auth', authRoutes);