export const capitalize = (s) => {
  if (s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
};

export const formatToIsraeliDate = (date) => {
  const baseDate = new Date(date);
  return `${baseDate.getDate().toString().padStart(2, "0")}/${(
    baseDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${baseDate.getFullYear()}`;
};

export const generateBrs = (num) => {
  const arrOfSpaces = [];
  for (let i = 0; i < num; i++) {
    arrOfSpaces.push(<br />);
  }
  return arrOfSpaces;
};

export const getStoresObj = (shoppingList, received = false) => {
  const storesArr = shoppingList
    .filter((item) => (received ? item.received : !item.received))
    .map((item) => item.store);
  const storedObj = {};
  storesArr.forEach((store) => {
    storedObj[store.toLowerCase()] = storedObj[store.toLowerCase()]
      ? storedObj[store.toLowerCase()] + 1
      : 1;
  });
  return storedObj;
};
