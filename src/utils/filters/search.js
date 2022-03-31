const searchFilter = (data, searchInput) => {
  console.log(searchInput);
  if (searchInput) {
    const searchedData = data.filter((item) =>
      [...item.title.toLowerCase().split(" ")].includes(
        searchInput.toLowerCase()
      )
    );
    console.log(
      "searchedData",
      [data[0].title.toLowerCase()].includes(searchInput.toLowerCase())
    );
    return searchedData;
  }
  return data;
};

export { searchFilter };
