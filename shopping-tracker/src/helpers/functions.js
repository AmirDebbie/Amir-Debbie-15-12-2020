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
  const itemsArr = shoppingList.filter((item) =>
    received ? item.received : !item.received
  );
  const storesObj = {};
  itemsArr.forEach((item) => {
    storesObj[item.store.toLowerCase()] = storesObj[item.store.toLowerCase()]
      ? {
          amount: storesObj[item.store.toLowerCase()].amount + 1,
          price: storesObj[item.store.toLowerCase()].price + item.priceInUSD,
        }
      : { amount: 1, price: item.priceInUSD };
  });
  return storesObj;
};

export const getPrice = (priceInUSD, currency) => {
  return currency.current === "USD"
    ? priceInUSD
    : Math.round(priceInUSD * currency.dif);
};
