export const clearAlert = (setMessage) => {
  setTimeout(() => {
    setMessage(false);
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
  items,
  setItems,
  setErrorType,
  setAddSuccess
) => {
  const isAnyFieldEmpty = item.itemName === "" || item.itemPrice === "";
  const isPriceNotANumber = isNaN(item.itemPrice);

  if (isAnyFieldEmpty || isPriceNotANumber) {
    if (isAnyFieldEmpty) {
      setErrorType((errorType) => {
        return {
          ...errorType,
          emptyfields: true,
        };
      });
    }
    if (isPriceNotANumber) {
      setErrorType((errorType) => {
        return {
          ...errorType,
          priceNotANumber: true,
        };
      });
    }
  } else {
    setItems([...items, item]);
    setErrorType((errorType) => {
      return {
        ...errorType,
        emptyfields: false,
        priceNotANumber: false,
      };
    });
    setAddSuccess(true);
    clearInputFields(item, setItem);
    clearAlert(setAddSuccess);
  }
};

export const handleClose = (openModal, setOpenModal) => {
  openModal && setOpenModal(false);
};
