const searchFilter = (data, searchInput) => {
  if (searchInput) {
    const searchedData = data.filter((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    return searchedData;
  }
  return data;
};

export { searchFilter };
