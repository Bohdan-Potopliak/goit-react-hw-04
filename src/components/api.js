import axios from "axios";

const API_URL = import.meta.env.VITE_UNSPLASH_API_URL;
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const fetchPhoto = async (params = {}) => {
  const response = await axios.get(`${API_URL}/search/photos/`, {
    params: {
      client_id: ACCESS_KEY,
      per_page: 12,
      ...params,
    },
  });
  return response.data.results;
};

export default fetchPhoto;
