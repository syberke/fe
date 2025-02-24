import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://book-store-backend-production-9682.up.railway.app/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // Pastikan ini tidak true jika tidak pakai cookie
});
