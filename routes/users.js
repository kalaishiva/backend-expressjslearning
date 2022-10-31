const express = require('express');
const routers = express.Router();


routers.get('/', (req, res) => {
    res.send("This is Users list");
});

routers.get('/menu', (req, res) => {
    res.send("This is Users MENU list");
});

routers.post('/', (req, res) => {
    res.send("Create User")
});

//to get the user id
routers.get('/:userId', (req, res) => {
    res.send(`Get User with ID ${req.params.userId}`);

})


module.exports = routers;