import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts/1";

export const request = async ({ method, data = {} }) => {
  const response = await axios[method](`${API_URL} `, data);
  return response.data;
};
