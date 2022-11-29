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

// This code is too long, please break it down into smaller sub components
const Modal = ({ openModal, setOpenModal }) => {
  const { items, setItems } = useContext(ItemsContext);
  const [item, setItem] = useState(initialItem);
  const [addSuccess, setAddSuccess] = useState(false);
  const [errorType, setErrorType] = useState({
    emptyfields: false,
    priceNotANumber: false,
  });

  const newObject = {
    ...item,
    id: uuidv4(),
    itemName: e.target.value,
  };
  const ErrorMessage = (
    <Message css={"message danger"} text={"Please fill in all the fields."} />
  );
  const SuccessMesage = (
    <Message css={"message success"} text={"Item added succesfully!!"} />
  );

  return (
    <div className="overlay">
      <div className="modal">
        <div className="close">
          {addSuccess && SuccessMessage}
          {errorType.emptyfields && ErrorMessage}
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
              setItem(newObject);
            }}
          />
          <br />
          <label htmlFor="itemPrice">Price of Item:</label>
          <input
            type="text"
            id="itemPrice"
            name="itemPrice"
            value={item.itemPrice}
            onChange={(e) => {
              setItem({
                ...item,
                itemPrice: e.target.value,
              });
            }}
          />
          {errorType.priceNotANumber && (
            <Message
              classRequired={"label"}
              alertMessage={"Please enter a number"}
            />
          )}
          <br />
        </div>
        <div className="button-holder">
          <Button
            text={"Add"}
            css={"btn add-item-list-btn"}
            onClick={() =>
              handleAddItemToList(
                item,
                setItem,
                items,
                setItems,
                setErrorType,
                setAddSuccess
              )
            }
          />
        </div>
      </div>
    </div>
  );
};
export default Modal;
