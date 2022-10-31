//Web Request
//GET - Requesting information
//POST - Add to DataBase (creating data)
//PUT - Edit to DataBase (changing data)
//DELETE - Delete to DataBase


const express = require('express')
const app = express()
const port = 3000

/* app.get('/', (req, res) => {
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

 */
//.../ api/v1/kalai
//typed in url(value===req.params.token) is get in the name(key)
/* app.get('/api/v1/:id', (req, res) => {
    // console.log(req.params.token);
    // console.log(req.params.id);
    //res.status(200).json({ name: req.params.token });
    //res.status(200).json({ id: req.params.id });

    res.render(index);

}) */

//rendering a file 

//have to set the view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { text: 'world' });
    res.render('index', { text123: 'Family' });
})

const userRouter = require('./routes/users');
app.use('/users', userRouter)

app.listen(port, () => {
    console.log(`I am  listening on port ${port}`)
});