import axios from "axios";

type APIRes = {
  id: string;
  url: string;
  width: number;
  height: number;
}[];

export const catnipThrower = axios.create({
  baseURL: " https://api.thecatapi.com/v1/images/search",
  params: {
    limit: 10,
    api_key: `${import.meta.env.VITE_API_KEY}`,
  },
  transformResponse: (data: APIRes) => {
    return data.map((cat) => cat.url);
  },
});
