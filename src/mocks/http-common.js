import axios from "axios";

export const http = axios.create({
  baseURL: "http://192.168.1.4:3000",
});

// http.interceptors.response.use();

// http.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("user");

//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//       config.headers["Content-Type"] = "application/json";
//     }

//     return config;
//   },

//   (error) => {
//     return Promise.reject(error);
//   }
// );
