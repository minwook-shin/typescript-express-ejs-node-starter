import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/server.js';

describe('Server Integration Tests', () => {
  describe('GET /', () => {
    it('should return 200 and render home page (EJS)', async () => {
      const response = await request(app).get('/');
      
      expect(response.status).toBe(200);
      expect(response.header['content-type']).toContain('text/html');
      
      // Check EJS rendering (Title and Content)
      expect(response.text).toContain('<title>Modern Starter</title>');
      expect(response.text).toContain('Modern TypeScript Express EJS Starter');
      
      // Check if HTMX script is included
      expect(response.text).toContain('htmx.org');
    });

    it('should return HTMX partial when hx-request header is present', async () => {
      const response = await request(app)
        .get('/?name=Vitest')
        .set('hx-request', 'true');

      expect(response.status).toBe(200);
      expect(response.text).toContain('Hello, Vitest! (via HTMX)');
      // Should not contain full HTML layout
      expect(response.text).not.toContain('<!DOCTYPE html>');
    });
  });
});