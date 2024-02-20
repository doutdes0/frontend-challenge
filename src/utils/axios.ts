import axios from "axios";

export const catnipThrower = axios.create({
  baseURL: " https://api.thecatapi.com/v1/images/search",
  params: {
    limit: 15,
    api_key: `${process.env.VITE_API_KEY}`,
  },
});
