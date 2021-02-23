import express from "express";

const app = express();


app.get('/users', (request, response) =>{
    return response.json({method : "GET", msg : "Hello World from GET!"});
});

app.post('/users', (request, response) => {
    return response.json({method : "POST", msg : "Hello World from post!"});
});

app.listen(5000, () => {
    console.log("Server stated in port 5000");
})