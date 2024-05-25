import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Routes from '../Api/Routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/routes', Routes);

app.listen(4000, () => {
    console.log("Connected to port 4000")
});
