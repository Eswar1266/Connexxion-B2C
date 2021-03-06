const express = require('express');
const path = require('path');

const server = express();
const port = process.env.PORT || 3001;
// built in middleware to serve static content just as images, css, html etc
server.use(express.static(path.join(__dirname, '/')));

// all get requests will point to angular's index.html in dist folder
server.get('/', async (req, res) => {
    res.sendFile(path.resolve(__dirname, 'homes/', 'home-v2.html'));

});

server.listen(port, () => console.log(`App Running on port ${port}`));

