export const clearAlert = (setAddSuccess) => {
  setTimeout(() => {
    setAddSuccess(false);
  }, 2000);
};

export const clearInputFields = (item, setItem) => {
  setItem({
    ...item,
    itemName: "",
    itemPrice: "",
  });
};

export const handleAddItemToList = (
  item,
  setItem,
  setError,
  setAddSuccess,
  items,
  setItems
) => {
  if (item.itemName === "" || item.itemPrice === "") {
    setError(true);
  } else {
    setError(false);
    setItems([...items, item]);
    setAddSuccess(true);
    clearInputFields(item, setItem);
    clearAlert(setAddSuccess);
  }
};

export const handleClose = (openModal, setOpenModal) => {
  openModal && setOpenModal(false);
};
