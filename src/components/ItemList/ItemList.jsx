import { useState, useContext, useEffect } from "react";
import { BiSort } from "react-icons/bi";
import "./ItemList.css";
import { Button, Item, Message } from "../index";
import { handleShowListToggle, handleNameSort, handlePriceSort } from "./utils";
import { ItemsContext } from "../../context";

const ItemList = ({ handleAddItem, openModal, setOpenModal }) => {
  const { items, setItems } = useContext(ItemsContext);
  const [showPurchasedItemsList, setShowPurchasedItemsList] = useState(false);
  const [itemsToBuy, setItemsToBuy] = useState([]);
  const itemsPurchased = items?.filter((item) => item.itemPurchased === true);
  const noItemsOnToBuyList = itemsToBuy.length === 0;
  const noItemsPurchased = itemsPurchased.length === 0;

  useEffect(() => {
    const itemsPendingOnList = items?.filter(
      (item) => item.itemPurchased === false
    );
    setItemsToBuy(itemsPendingOnList);
  }, [items]);

  return (
    <>
      <div className="item-list-container">
        <section className="item-list-heading">
          <h1>SHOPPING LIST</h1>
          <p>
            SORT BY:
            <Button
              classRequired={"sort-button"}
              text={"NAME"}
              onClick={() => handleNameSort(itemsToBuy, setItemsToBuy)}
            />
            <BiSort style={{ marginBottom: 1.2 }} />
            <Button
              classRequired={"sort-button"}
              text={"PRICE"}
              onClick={() => handlePriceSort(itemsToBuy, setItemsToBuy)}
            />
            <BiSort style={{ marginBottom: 1.2 }} />
          </p>
        </section>
        {noItemsOnToBuyList ? (
          <Message
            classRequired={"message"}
            alertMessage={"PLEASE ADD AN ITEM"}
          />
        ) : (
          <section className="item-list">
            {itemsToBuy.map((item) => {
              return (
                <Item
                  key={item.id}
                  item={item}
                  items={items}
                  setItems={setItems}
                />
              );
            })}
          </section>
        )}
        <section>
          <Button
            text={"Add Item"}
            classRequired={"btn"}
            onClick={() => handleAddItem(openModal, setOpenModal)}
          />
        </section>
      </div>
      <section>
        <Button
          classRequired={"link"}
          text={
            showPurchasedItemsList
              ? "Hide Purchased Items"
              : "Show Purchased Items"
          }
          onClick={() =>
            handleShowListToggle(
              showPurchasedItemsList,
              setShowPurchasedItemsList
            )
          }
        />
      </section>
      <section className="purchased-items-list">
        {showPurchasedItemsList && noItemsPurchased && (
          <Message classRequired={"message"} alertMessage={"NOTHING TO SHOW"} />
        )}
        {showPurchasedItemsList &&
          !noItemsPurchased &&
          itemsPurchased.map((item) => (
            <Item key={item.id} item={item} items={items} setItems={setItems} />
          ))}
      </section>
    </>
  );
};

export default ItemList;
