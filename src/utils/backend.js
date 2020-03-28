import axios from 'axios';
import {API_URL} from "../constants";

const backend = axios.create({
	baseURL: API_URL
});

backend.defaults.withCredentials = true;

export default backend;
