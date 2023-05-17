import axios from 'axios';
import config from './superJobConfig';

export default axios.create({
  baseURL: config.base_url,
  headers: {
    'x-secret-key': config.secret_key,
  },
});
