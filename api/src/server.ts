
import 'reflect-metadata';
import express from "express";

const app = express();

import './database'
import { router } from './routes';

app.use(express.json());
app.use(router);


app.listen(5000, () => {
    console.log("Server stated in port 5000");
})