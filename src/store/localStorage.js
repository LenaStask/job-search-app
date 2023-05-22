export const getAuth = () => {
  const auth = localStorage.getItem('auth');

  return auth ? JSON.parse(auth) : null;
};

export const setAuth = (auth) => {
  localStorage.setItem('auth', JSON.stringify(auth));
};

export const getFavorites = () => {
  const favorites = localStorage.getItem('favorites');

  return favorites ? JSON.parse(favorites) : [];
};

export const setFavorites = (favorites) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};
