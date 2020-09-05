const controller = require('../services/cep'); 
module.exports = (app) => {    
    app.post('/cep', async (req, res) => {
        if (req.headers.token !== "JS_e_Tudo") 
            return res.status(401).send({ error: "Informe um token"});
        
        let cep = controller.validaCep(req.body.cep); 
    
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
        else res.status(400).json({ error: "CEP Inválido"});              
    });
}
