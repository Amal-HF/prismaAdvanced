import express from 'express';
import userRouter from './routers/user.router';
import bookRouter from './routers/book.router';
import loanRouter from './routers/loan.router';
import 'dotenv/config'
import { connectDB } from './config/db';

const app = express();
app.use(express.json());

// db connection
connectDB();

// middlewares
app.use('/api/v1/user', userRouter);
app.use('/api/v1/book', bookRouter);
app.use('/api/v1/loan', loanRouter);

const PORT =  process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is runninr in port: ' + PORT);
});