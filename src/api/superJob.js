import client from './superJobClient';
import config from './superJobConfig';

const login = async () => client.get('oauth2/password/', {
  params: {
    login: config.login,
    password: config.password,
    client_id: config.client_id,
    client_secret: config.client_secret,
  },
});

const authenticate = async () => {
  const auth = localStorage.getItem('auth');

  if (auth) {
    return JSON.parse(auth);
  }

  const res = await login();

  localStorage.setItem('auth', JSON.stringify(res.data));

  return res.data;
};

const getVacancies = async (data) => {
  const auth = await authenticate();

  console.log(data);

  const params = {
    published: data.published || 1,
    page: data.page,
    count: data.count,
  };

  if (data.keyword) {
    params.keyword = data.keyword;
  }

  if (data.catalogues) {
    params.catalogues = data.catalogues;
  }

  if (data.paymentFrom) {
    params.payment_from = Number(data.paymentFrom);
  }

  if (data.paymentTo) {
    params.payment_to = Number(data.paymentTo);
  }

  if (data.favorites) {
    params.ids = [...data.favorites];
  }

  return client.get('vacancies/', {
    headers: {
      'X-Api-App-Id': config.client_secret,
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
      'X-Api-App-Id': config.client_secret,
      Authorization: `Bearer ${auth.access_token}`,
    },
  });
};

export default { getVacancies, getCatalogues, getVacancy };
