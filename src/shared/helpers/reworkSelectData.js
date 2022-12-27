const reworkDataSelect = data => {
  const newArr = data.map(el => {
    const newEl = { value: el, label: el };
    return newEl;
  });
  return newArr;
};
export default reworkDataSelect;
