export const sortData = (objs) => {
  return objs.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
};

export const sortByRating = (objs) => {
  const objsSorted = objs.sort((a, b) =>
    a.rating < b.rating ? 1 : b.rating < a.rating ? -1 : 0
  );
  return [...objsSorted];
};

export const sortByPrice = (objs) => {
  const objsSorted = objs.sort((a, b) =>
    a.price_range.length > b.price_range.length
      ? 1
      : b.price_range.length > a.price_range.length
      ? -1
      : 0
  );
  return [...objsSorted];
};

export const filterData = (data, substring, property) => {
  let filteredData = data.filter((item) =>
    item[property].toLowerCase().includes(substring.trim().toLowerCase())
  );

  return sortData(filteredData);
};
