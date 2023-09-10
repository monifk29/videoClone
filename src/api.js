import axios from 'axios';

const BASE_URL = 'https://internship-service.onrender.com';

export const fetchVideos = async (page) => {
  try {
    const response = await axios.get(`https://internship-service.onrender.com/videos?page=${page}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
