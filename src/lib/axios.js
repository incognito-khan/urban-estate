import axios from "axios";

/**
 * Axios instance
 */
const api = axios.create({
  baseURL: "/api/v1",
  withCredentials: true,
});

/**
 * Request interceptor
 * Attaches JWT token if available
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

/**
 * Response interceptor (optional, but recommended)
 */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Central place for auth failures
    if (error.response?.status === 401) {
      console.warn("Unauthorized — token may be invalid or expired");
      // optional: dispatch logout()
    }
    return Promise.reject(error);
  },
);

export default api;
