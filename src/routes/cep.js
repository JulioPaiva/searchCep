const controller = require('../controllers/cep'); 
module.exports = (app) => {
    app.post('/cep', async (req, res) => {    
        let cep = req.body.cep;

        const data = await controller.getAddress(cep); 

        res.status(200).send(data)
    });
}