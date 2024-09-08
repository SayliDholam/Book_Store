import express, { request, response } from "express";
export const DB_NAME = 'BookStore';
import { PORT , MONGODB_URI} from "./config.js";
import mongoose from "mongoose";
import booksRoutes from './routes/booksRoutes.js'
import cors from 'cors';

const app = express();

app.use(express.json());


app.use(cors())

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
})
);


app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("Hello");
}); 


app.use('/books',booksRoutes);


mongoose.connect(MONGODB_URI).then(() => 
    {
        console.log('db connect done');
        app.listen(PORT, () => {
            console.log(`listen to ${PORT}`);
        });
    })
    .catch((error) =>
    {
        console.log(error);
    });

