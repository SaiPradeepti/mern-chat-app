// importing express
const express = require('express');
const { chats } = require('./data/data');

// creating instance of express
const app = express();

app.get('/', (req, res) => {
    res.send('API is Running');
})

app.get('/api/chat', (req, res) => {
    res.send(chats);
})

// starting web-server
app.listen(5000, console.log('server started on port 5000'));
