const controller = require('../services/cep'); 
module.exports = (app) => {
    app.post('/cep', async (req, res) => {
        let cep = controller.validaCep(req.body.cep); 
    
        try {
            if (cep) {
                let data; 
        
                do {
                    data = await controller.getAddress(cep); 
        
                    if ( data == false ) {
                        cep = controller.removeLast(cep);
                    }
        
                } while (!data);          
        
                res.status(200).json(data);
            } 
            else res.status(400).json({ error: "CEP Inválido"}) 
    
        } catch { res.status(400).json({ error: "CEP Inválido"}) }
    });
}
