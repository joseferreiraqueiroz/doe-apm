import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type':'application/json'
    }
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('Authtoken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config; 
    },
    (error) => {
        console.log(error); 
        return Promise.reject(error);
    }
);
