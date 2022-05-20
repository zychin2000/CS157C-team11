import axios from 'axios';

// Create an instance of axios
const api = axios.create({
  // baseURL: '/api',
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});
/*
  NOTE: intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
*/

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
    localStorage.removeItem("user");
    }
    return Promise.reject(err);
  }
);

api.interceptors.request.use(function (config) {
    const token = JSON.parse(localStorage.getItem('user'));
    // config.headers.Authorization =  token;
    if(token){
      config.headers['x-auth-token'] = token.token;
    }
    return config;
});


export default api;
