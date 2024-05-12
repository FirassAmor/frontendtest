import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Replace with your backend base URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchPersons = async (offset, limit) => {
  try {
    const response = await api.get(`/persons?offset=${offset}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching persons:', error);
    throw error;
  }
};

// Add other API request functions as needed
