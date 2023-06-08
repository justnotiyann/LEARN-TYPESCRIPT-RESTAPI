import request from 'supertest';
import app from "./app"

describe('REST API Test', () => {
    test('GET / endpoint should return "Hello, TypeScript with Express!"', async () => {
        const res = await request(app).get('/');
        expect(res.status).toBe(200);
        expect(res.body).toBeDefined();
        expect(typeof res.body).toBe('object');
        expect(res.body.message).toBeDefined();
        expect(typeof res.body.message).toBe('string');
    });

    test("/Users endpoint should return array of object of users", async function () {
        const res = await request(app).get('/users');

        expect(res.status).toBe(200);
        expect(res.body).toBeDefined();
        expect(typeof res.body).toBe('object');
        expect(res.body.data).toBeDefined();
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(typeof res.body.data).toBe('object');
    })
});