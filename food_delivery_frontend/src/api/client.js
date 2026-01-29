import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

// PUBLIC_INTERFACE
export const apiClient = axios.create({
  /** Axios instance used for all backend API calls. */
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Attach Authorization header (JWT) if present.
 * We intentionally keep the key name simple: localStorage['token'].
 */
apiClient.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("token");
    if (token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Redirect to /login on 401. We use window.location to avoid depending on router hooks
 * inside this module.
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    if (status === 401) {
      // Prevent redirect loops if we're already on /login
      if (!window.location.pathname.startsWith("/login")) {
        window.location.assign("/login");
      }
    }
    return Promise.reject(error);
  }
);
