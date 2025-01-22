const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {res.send("This is the index page");});
app.get('/hello/:name', (req, res) => {res.send(`Hello, ${req.params.name}!`)});

app.listen(PORT);