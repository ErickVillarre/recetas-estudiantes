const FAVORITOS_KEY = "favoritos";

export const getFavorites = (): number[] => {
  const data = localStorage.getItem(FAVORITOS_KEY);
  return data ? JSON.parse(data) : [];
};

export const addFavorite = (id: number): void => {
  const current = getFavorites();
  if (!current.includes(id)) {
    const updated = [...current, id];
    localStorage.setItem(FAVORITOS_KEY, JSON.stringify(updated));
  }
};

export const removeFavorite = (id: number): void => {
  const current = getFavorites();
  const updated = current.filter(favId => favId !== id);
  localStorage.setItem(FAVORITOS_KEY, JSON.stringify(updated));
};