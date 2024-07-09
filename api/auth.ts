import axios from "axios";

const BASE_URL = "http://localhost:3000/auth";

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/sign-in`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (
  email: string,
  password: string,
  name: string,
  role: string
) => {
  try {
    const response = await axios.post(`${BASE_URL}/sign-up`, {
      email,
      password,
      name,
      role,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
