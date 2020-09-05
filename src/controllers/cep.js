const axios = require('axios');

module.exports = { getAddress }

function prepRet(data) {
    let { logradouro, bairro, localidade, uf } = data;
            
    return {  
        RUA: logradouro, 
        BAIRRO: bairro, 
        CIDADE: localidade, 
        ESTADO: uf
    }      
}

function getAddress(cep) {
    return new Promise ((res, rej) => {
        try {
            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => {
                if( response.data.erro ) {
                    res(false); 
                } else {
                    let data = prepRet(response.data);
                    return res(data);
                }
            })
        } catch(err) {
            return rej(err)
        }
     }) 
}