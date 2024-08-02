import axios from 'axios';

const baseURL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerStudent = async (username, password) => {
  try {
    const response = await api.post('/auth/register/student', {username, password});
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const registerTeacher = async (username, password) => {
  try {
    const response = await api.post('/auth/register/teacher', {username, password});
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const studentLogin = async (username, password) => {
  try {
    const response = await api.post('/auth/login/student', {username, password});
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const teacherLogin = async (username, password) => {
  try {
    const response = await api.post('/auth/login/teacher', {username, password});
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

