//Web Request
//GET - Requesting information
//POST - Add to DataBase (creating data)
//PUT - Edit to DataBase (changing data)
//DELETE - Delete to DataBase


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!...Node JS camp 1.0')

    res.status(200).send("Hello Kalai");
});

app.get('/kalai', (req, res) => {
    res.send('Instagram')
});

app.get('/features', (req, res) => {
    res.send('A test runner build for humans')
});

app.get('/insta', (req, res) => {
    const insta = {
        userName: 'hiteshchoudharyoffical',
        followers: 70,
        follow: 200,
    };
    res.status(200).json({ insta });
});

app.get('/v1/twitter', (req, res) => {
    const twitter = {
        userName: "hiteshdotcom",
        followers: 700,
        follows: 50,

    };
    res.status(200).json({ twitter });
});


//.../ api/v1/kalai
app.get('/api/v1/:token', (req, res) => {
    console.log(req.params.token);
    res.status(200).json({ param: req.params.token });
})

app.listen(port, () => {
    console.log(`I am  listening on port ${port}`)
});