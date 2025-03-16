import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // URL dell'API Gateway

export const getUser = async (userId) => {
  const response = await axios.get(`${API_BASE_URL}/user/${userId}`);
  return response.data;
};

export const getQuestions = async () => {
  const response = await axios.get(`${API_BASE_URL}/questions`);
  return response.data;
};

export const submitVote = async (voteData) => {
  const response = await axios.post(`${API_BASE_URL}/voting`, voteData);
  return response.data;
};