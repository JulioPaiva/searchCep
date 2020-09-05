const app = require('express')(), 
      consign = require('consign'),
      bodyParser = require('body-parser'),
      swaggerUi = require('swagger-ui-express'),
      swaggerDocument = require('../docs/swagger.json');
 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json());

consign({ cwd: 'src', verbose: false })
    .then('./services')
    .then('./routes')    
    .into(app);

module.exports = app;
