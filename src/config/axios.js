import axios from 'axios';
const API_URL = process.env.REACT_APP_BASE_API_URL;
axios.defaults.baseURL = `${API_URL}/data/2.5`;

axios.interceptors.response.use(response => response?.data);
