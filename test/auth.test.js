const supertest = require('supertest');
const app = require('../src/app');

test('Deve reeber token', () => {
    return supertest(app).get('/auth')
        .then((res) => {
            expect(res.status).toBe(200);
        });
});