export const hasArray = (data) => {
  for (let key in data) {
    if (Array.isArray(data[key])) {
      return data[key];
    }
  }
  return [];
};
