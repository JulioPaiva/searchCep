const supertest = require('supertest');

const app = require('../src/app');

test('Deve buscar o endereço', () => {
    return supertest(app).post('/cep')
        .send({ cep: '14403331' })
        .then((res) => {
            expect(res.status).toBe(200);
        });
});
