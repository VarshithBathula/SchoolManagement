import axios from 'axios';

const baseURL = 'http://localhost:3002';

export const studentLogin = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/StudentUsers/login`,data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const studentSignup = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/StudentUsers/signup`,data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const teacherLogin = async (data) => {
    try {
      const response = await axios.post(`${baseURL}/TeacherUsers/login`,data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const teacherSignup = async (data) => {
    try {
      const response = await axios.post(`${baseURL}/TeacherUsers/signup`,data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };



  export const ParentLogin = async (data) => {
    try {
      const response = await axios.post(`${baseURL}/ParentUsers/login`,data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const ParentSignup = async (data) => {
    try {
      const response = await axios.post(`${baseURL}/ParentUsers/signup`,data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const AdminLogin = async (data) => {
    try {
      const response = await axios.post(`${baseURL}/AdminUsers/login`,data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const AdminSignup = async (data) => {
    try {
      const response = await axios.post(`${baseURL}/AdminUsers/signup`,data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };