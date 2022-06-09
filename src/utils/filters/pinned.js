const pinFilter = (notes) => {
  if (notes && notes.length) {
    const pinned = [];
    const unpinned = [];

    const pinnedData = notes.map((item) =>
      item.pinned ? pinned.push(item) : unpinned.push(item)
    );
    return [...pinned, ...unpinned];
  }
  return notes;
};

export { pinFilter };
