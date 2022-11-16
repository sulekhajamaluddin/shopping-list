import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Modal.css";
import { Button, Message } from "../index";
import { ItemsContext } from "../../context";
import { handleAddItemToList, handleClose } from "./utils";

const initialItem = {
  id: "",
  itemName: "",
  itemPrice: "",
  itemPurchased: false,
};

const Modal = ({ openModal, setOpenModal }) => {
  const { items, setItems } = useContext(ItemsContext);

  const [item, setItem] = useState(initialItem);
  const [addSuccess, setAddSuccess] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="overlay">
      <div className="modal">
        <div className="close">
          {addSuccess && (
            <Message
              classRequired={"message success"}
              alertMessage={"ITEM ADDED SUCCESSFULLY!!"}
            />
          )}
          {error && (
            <Message
              classRequired={"message danger"}
              alertMessage={"ALL FIELDS ARE REQUIRED!!"}
            />
          )}
          <AiFillCloseCircle
            className="icon"
            onClick={() => handleClose(openModal, setOpenModal)}
          />
        </div>
        <div className="input-holder">
          <label htmlFor="itemName">Name of Item:</label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={item.itemName}
            onChange={(e) => {
              setItem({
                ...item,
                id: uuidv4(),
                itemName: e.target.value,
              });
            }}
          />
          <br />
          <label htmlFor="itemPrice">Price of Item:</label>
          <input
            type="text"
            id="itemPrice"
            name="itemPrice"
            placeholder="0.0"
            value={item.itemPrice}
            onChange={(e) => {
              setItem({
                ...item,
                itemPrice: e.target.value,
              });
            }}
          />
          <br />
        </div>
        <div className="button-holder">
          <Button
            text={"Add"}
            classRequired={"btn add-item-list-btn"}
            onClick={() =>
              handleAddItemToList(
                item,
                setItem,
                setError,
                setAddSuccess,
                items,
                setItems
              )
            }
          />
        </div>
      </div>
    </div>
  );
};
export default Modal;
