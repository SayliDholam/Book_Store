import express from "express";
import { PORT , MONGODB_URI, DB_NAME, COLLECTION_NAME} from "./config.js";
import mongoose from "mongoose";


const app = express();

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("Hello");
});


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

    