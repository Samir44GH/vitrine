// Construit une adresse interne fiable quel que soit le format de BASE_URL.
export const url = (path = '') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
};
