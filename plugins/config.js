import axios from 'axios'
const http = axios.create({
    baseURL:'http://localhost:3001/'
})


http.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
 
// Add a response interceptor
http.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
      console.log(error);
      
    return Promise.reject(error);
  });

export default http