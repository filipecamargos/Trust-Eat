export const sortData = (objs) => {
  return objs.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
};

export const filterData = (data, substring, property) => {
  let filteredData = data.filter((item) =>
    item[property].toLowerCase().includes(substring.trim().toLowerCase())
  );

  return sortData(filteredData);
};
