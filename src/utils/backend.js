import axios from 'axios';

const backend = axios.create({
	baseURL: process.env.REACT_APP_API_URL
});

backend.defaults.withCredentials = true;

export default backend;
