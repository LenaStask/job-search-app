import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_SUPER_JOB_BASE_URL,
  headers: {
    'x-secret-key': process.env.REACT_APP_SUPER_JOB_SECRET_KEY,
  },
});
