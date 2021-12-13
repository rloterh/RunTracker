import axios from 'axios';

const getInitialFeed = async () => {
  const response = await axios.get('http://localhost:3000/api/v1/feeds');
  return response.data;
};

export default getInitialFeed;
