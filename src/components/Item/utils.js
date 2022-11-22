export const toggleItemPurchase = (items, itemClicked) => {
  const updatedList = items.map((item) => {
    if (item.id === itemClicked.id) {
      return { ...item, itemPurchased: !item.itemPurchased };
    } else {
      return item;
    }
  });
  return updatedList;
};
// put a empty line between functions
export const handleCheckBoxEvent = (e, itemClicked, items, setItems) => {
  if (e.target.checked) {
    const updatedList = toggleItemPurchase(items, itemClicked);
    setItems(updatedList);
  }
};
