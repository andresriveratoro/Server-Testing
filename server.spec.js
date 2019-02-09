const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
  describe('POST', () => {
    it('returns 201 (Created) status code', async () => {
      const response = await request(server).post('/api');
      expect(response.statusCode).toBe(201);
    });

    it('returns application/json', async () => {
      const response = await request(server).post('/api');
      expect(response.type).toBe('application/json');
    });

    it('returns a JSON object', async () => {
      const expectedBody = { name: 'Andres' };
      const response = await request(server).post('/api');
      expect(response.body).toEqual(expectedBody);
    });
  });
});
