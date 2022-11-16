export const setItemsToLocalStorage = (items) => {
  localStorage.setItem("items", JSON.stringify(items));
};
