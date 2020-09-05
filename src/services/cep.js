const axios = require('axios');

module.exports = {
    removeLast, 
    prepCep, 
    validaCep, 
    prepRet, 
    getAddress
}

function removeLast(data) {
    return data.slice(0,-1); 
}

function prepCep(data) {    
    for (let i = data.length; i < 8; i++) {
        data += '0'            
    }

    return data;       
}

function validaCep(data) {
    let cep = String(data).replace("-", "");

    if (parseInt(cep) && cep.length === 8) { 
        return cep;
    } 
}

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
    paramCep = prepCep(cep);

    return new Promise ((res, rej) => {
        try {
            axios.get(`https://viacep.com.br/ws/${paramCep}/json/`)
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