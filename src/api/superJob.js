import client from './superJobClient';
import { getAuth, setAuth } from '../store/localStorage';

const login = async () => client.get('oauth2/password/', {
  params: {
    login: process.env.REACT_APP_SUPER_JOB_LOGIN,
    password: process.env.REACT_APP_SUPER_JOB_PASSWORD,
    client_id: process.env.REACT_APP_SUPER_JOB_CLIENT_ID,
    client_secret: process.env.REACT_APP_SUPER_JOB_CLIENT_SECRET,
  },
});

const authenticate = async () => {
  let auth = getAuth();

  if (!auth) {
    const res = await login();

    auth = res.data;
    setAuth(auth);
  }

  return auth;
};

const getVacancies = async (params) => {
  const auth = await authenticate();

  return client.get('vacancies/', {
    headers: {
      'X-Api-App-Id': process.env.REACT_APP_SUPER_JOB_CLIENT_SECRET,
      Authorization: `Bearer ${auth.access_token}`,
    },
    params,
  });
};

const getCatalogues = async () => client.get('catalogues/');

const getVacancy = async (id) => {
  const auth = await authenticate();

  return client.get(`vacancies/${id}/`, {
    headers: {
      'X-Api-App-Id': process.env.REACT_APP_SUPER_JOB_CLIENT_SECRET,
      Authorization: `Bearer ${auth.access_token}`,
    },
  });
};

export default { getVacancies, getCatalogues, getVacancy };
