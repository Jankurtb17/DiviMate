import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

// Define the type for the axios instance
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

// Create the axios instance
const api: AxiosInstance = axios.create({ baseURL: 'http://localhost:8000'  });

// Add request interceptor
api.interceptors.request.use((config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token = localStorage.getItem('access_token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Export the boot function with proper typing
export default boot(({ app }) => {
  // Make axios and api available globally in Vue components
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

// Export the api instance for use in components
export { api };