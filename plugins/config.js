import axios from 'axios'
const http = axios.create({
    baseURL:'https://node.12380ch.com'
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