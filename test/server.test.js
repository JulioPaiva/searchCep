const supertest = require('supertest');

const app = require('../src/app');

test('Server deve responder.', () => {
    return supertest(app).get('/')
        .then((res) => {
            expect(res.status).toBe(200);
        });
});
