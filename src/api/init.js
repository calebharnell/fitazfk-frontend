import axios from 'axios';

const api = axios.create({
	baseURL: 'https://fitazfk-backend.herokuapp.com/',
});

const setJwt = (token) => {
	localStorage.setItem('token', token)
	api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

// Fuction that takes response and checks if unauth, then logs out and redirects

export { api, setJwt }