const app = require('express')();

app.get('/', (req, res) => res.status(200).send(new Date()));

module.exports = app;