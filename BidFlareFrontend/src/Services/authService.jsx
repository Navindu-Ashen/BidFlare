import axios from 'axios';

const API_URL = 'http://localhost:5116/api/account';

const register = async (username, email, phoneNumber, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      userName: username,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};

export default {
  register,
};