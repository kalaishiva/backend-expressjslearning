const express = require('express');
const routers = express.Router();


/* routers.get('/', (req, res) => {
    res.send("This is Users list");
});

routers.get('/menu', (req, res) => {
    res.send("This is Users MENU list");
});

routers.post('/', (req, res) => {
    res.send("Create User")
});
 */
//to get, post and delete the userId

routers.route('/:userId')
    .get((req, res) => {
        console.log('hi ' + req.user);
        res.send(`Get User with ID ${req.params.userId}`)
    })
    .put((req, res) => {
        res.send(`Get User with ID ${req.params.userId}`)
    })
    .delete((req, res) => {
        res.send(`Get User with ID ${req.params.userId}`)
    })


//get the url id and show the answer

const users = [{ name: 'Kalai' }, { name: 'Shivani' }];

routers.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})


module.exports = routers;