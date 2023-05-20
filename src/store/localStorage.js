export const getFavorites = () => {
  const favorites = localStorage.getItem('favorites');

  return favorites ? JSON.parse(favorites) : [];
};

export const setFavorites = (favorites) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};
