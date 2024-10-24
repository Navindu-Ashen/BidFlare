// authService.test.jsx
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import authService from './authService';

const API_URL = 'http://localhost:5116/api/account';

describe('authService', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('should register a user and store the JWT token', async () => {
    const mockResponse = { token: 'mock-jwt-token' };
    mock.onPost(`${API_URL}/register`).reply(200, mockResponse);

    const result = await authService.register('testuser', 'test@example.com', '1234567890', 'password123');

    expect(result).toEqual(mockResponse);
    expect(localStorage.setItem).toHaveBeenCalledWith('token', 'mock-jwt-token');
  });

  it('should throw an error if registration fails', async () => {
    const mockError = { message: 'Registration failed' };
    mock.onPost(`${API_URL}/register`).reply(400, mockError);

    await expect(authService.register('testuser', 'test@example.com', '1234567890', 'password123')).rejects.toEqual(mockError);
  });
});