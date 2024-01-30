import axios from "axios";

export const catnipThrower = axios.create({
  baseURL: " https://api.thecatapi.com/v1/images/search",
  params: {
    limit: 10,
    api_key: `${import.meta.env.VITE_API_KEY}`,
  },
});
