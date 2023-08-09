import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://playmotion-server.vercel.app',
});

export default axiosInstance;
