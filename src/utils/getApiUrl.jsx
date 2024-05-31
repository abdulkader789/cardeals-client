// src/utils/api.js

export const getApiUrl = (endpoint) => {
  const baseUrl = import.meta.env.PROD ? import.meta.env.VITE_API_URL : "/api";
  return `${baseUrl}${endpoint}`;
};
