//Create web server
const express = require('express');
const app = express();
const port = 3000;

//Import commentData.js
const commentData = require('./commentData');

//Import comment.js
const comment = require('./comment');

//Import body-parser
const bodyParser = require('body-parser');

//Import commentService.js
const commentService = require('./commentService');

//Import comment.js
const comment = require('./comment');

app.use(bodyParser.json());

//Get all comments
app.get('/comment', (req, res) => {
    res.send(commentData);
});

//Get comment by id
app.get('/comment/:id', (req, res) => {
    const comment = commentData.find(c => c.id === parseInt(req.params.id));
    if (!comment) res.status(404).send('The comment with the given ID was not found.');
    res.send(comment);
});

//Post a comment
app.post('/comment', (req, res) => {
    const comment = {
        id: commentData.length + 1,
        content: req.body.content,

    };
    commentData.push(comment);
    res.send(comment);
});


