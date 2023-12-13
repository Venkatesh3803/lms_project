import axios from "axios"
import { toast } from "react-toastify"

export const baseURL = "https://learningmanagement-backend.onrender.com/api"

export const api = axios.create({
  baseURL: "https://learningmanagement-backend.onrender.com/api"
})


export const registerRequest = async (formData) => {
  try {
    const res = await api.post("/auth", formData);
    if (res.data) {
      toast.success("Registeration Sucessful")
    }
    return res.data;
  } catch (error) {
    toast.error(error.response.data)
  }
}

export const getUserRequest = async (id) => {
  try {
    const res = await api.post(`/user/${id}`);
    return res.data;
  } catch (error) {
    return error.message
  }
};


export const updateUserRequest = async (endpoint, method, data, token) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };

  const config = {
    method,
    url: `${baseURL}/${endpoint}`,
    headers,
    data,
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error.message;
  }
};