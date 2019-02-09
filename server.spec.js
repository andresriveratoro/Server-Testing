const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
  describe('POST', () => {
    it('returns a 201 (Created) status code', async () => {
      const response = await request(server).post('/api');
      expect(response.statusCode).toBe(201);
    });

    it('returns content-type application/json', async () => {
      const response = await request(server).post('/api');
      expect(response.type).toBe('application/json');
    });

    it('returns a JSON object', async () => {
      const expectedBody = { name: 'Andres' };
      const response = await request(server).post('/api');
      expect(response.body).toEqual(expectedBody);
    });
  });

  describe('DELETE', () => {
    it('returns a 200 (OK) status code', async () => {
      const response = await request(server).delete('/api');
      expect(response.statusCode).toBe(200);
    });

    it('returns content-type application/json', async () => {
      const response = await request(server).delete('/api');
      expect(response.type).toBe('application/json');
    });

    it('returns a JSON object', async () => {
      const expectedBody = { message: 'deleted' };
      const response = await request(server).delete('/api');
      expect(response.body).toEqual(expectedBody);
    });
  });
});
