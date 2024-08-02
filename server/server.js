import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/auth.js';
import './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/auth', router);

app.get('/', (req, res) => {
    res.send('Hi...');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
