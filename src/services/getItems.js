export const getItemsFromLocalStorage = () => {
  const itemsOnList = JSON.parse(localStorage.getItem("items"));
  return itemsOnList;
};
