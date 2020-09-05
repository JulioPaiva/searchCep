const app = require('express')(), 
      consign = require('consign'),
      bodyParser = require('body-parser');

app.use(bodyParser.json());

consign({ cwd: 'src', verbose: false })
    .then('./routes')
    .into(app);

module.exports = app;
