const sortFilter = (notes, sortBy) => {
  if (sortBy === "ASC")
    return [...notes].sort((item1, item2) => {
      if (item1.date > item2.date) return 1;
      return -1;
    });
  else if (sortBy === "DESC")
    return [...notes].sort((item1, item2) => {
      if (item1.date > item2.date) return -1;
      return 1;
    });

  return notes;
};
export { sortFilter };
