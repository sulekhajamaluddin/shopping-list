export const handleShowListToggle = (
  showPurchasedItemsList,
  setShowPurchasedItemsList
) => {
  setShowPurchasedItemsList(!showPurchasedItemsList);
};

export const nameSort = (items) => {
  const nameSortedArray = [...items].sort((item1, item2) => {
    const nameItem1 = item1.itemName.toUpperCase();
    const nameItem2 = item2.itemName.toUpperCase();
    return nameItem1 < nameItem2 ? -1 : nameItem1 > nameItem2 ? 1 : 0;
  });
  return nameSortedArray;
};

export const priceSort = (items) => {
  const priceSortedArray = [...items].sort(
    (item1, item2) => Number(item1.itemPrice) - Number(item2.itemPrice)
  );
  return priceSortedArray;
};

export const handleNameSort = (itemsToBuy, setItemsToBuy) => {
  const nameSortedArray = nameSort(itemsToBuy);
  setItemsToBuy(nameSortedArray);
};

export const handlePriceSort = (itemsToBuy, setItemsToBuy) => {
  const priceSortedArray = priceSort(itemsToBuy);

  setItemsToBuy(priceSortedArray);
};
