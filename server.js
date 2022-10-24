const express = require('express')
const app = express() // Express.js
const port = 3000 // Localhost server
const bodyParser = require('body-parser') // Body Parser

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => { // Listening to HTTP Request
    res.send('Hello World!') // Send plain text back 
})

app.get('/datarep', (req, res) => {
    res.send('Hello from DataRep')
})

app.get('/hello/:name', (req, res) => {
    console.log(req.params.name); // HTTP Response Parameter
    res.send('Hello ' + req.params.name) // Sending information from the client to the server as part of the URL
})

app.get('/api/books', (req, res) => {
    const books = [ //JSON 
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
            "Kyle Banker",
            "Peter Bakkum",
            "Tim Hawkins",
            "Shaun Verch",
            "Douglas Garrett"
        ],
        "categories": []
        },
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }
        ];

        res.status(200).json({ // Sending JSON back when status code is 200
            mybooks:books 
        }) 
    })

app.get('/test', (req,res) => {
    res.sendFile(__dirname + '/index.html') // Sending a file // __dirname works out of the current directory
})

app.get('/name', (req,res) => { // Sending first name & last name back
    console.log(req.query.fname); // Pulls first name out
    res.send('Hello '+req.query.fname+ ' '+req.query.lname); //Pulls first and last name and displays it 
})

app.post('/name', (req,res) => { // Post Method (more secure) embeds it in the body
    console.log(req.body); // Pull the body of the http request out 
    res.send('Hello '+req.body.fname+ ' ' +req.body.lname+ ' from POST'); 
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
