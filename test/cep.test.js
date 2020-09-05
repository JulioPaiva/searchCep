const supertest = require('supertest');

const app = require('../src/app');
const services = require('../src/services/cep'); 

test('Deve buscar o endereço', () => {
    return supertest(app).post('/cep')
        .send({ cep: '14403331' })
        .then((res) => {
            expect(res.status).toBe(200);
        });
});

test('Deve validar Cep', () => {
    const cep = 14403331;

    let res = services.validaCep(cep);

    expect(res).toBe('14403331')
}); 

test('Deve preparar o retorno', () => {
    const address = { 
        logradouro : 'logradouro', 
        bairro : 'bairro', 
        localidade : 'localidade', 
        uf : 'uf' 
    }

    let res = services.prepRet(address);

    expect(res.RUA).toBe('logradouro');
});

test('Deve validar Cep', async () => {
    const cep = 14403;

    let res = await services.prepCep(cep);

    expect(res).toBe(14403)
}); 

test('Deve remover o último caracter', () => {
    const cep = '14403331';

    let res = services.removeLast(cep);

    expect(res).toBe('1440333')
    
});