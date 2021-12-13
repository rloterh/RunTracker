import axios from 'axios';

const getInitialFeed = async () => {
  const response = await axios.get('http://localhost:300/v1/feeds');
  return response.data;
}

export default getInitialFeed;