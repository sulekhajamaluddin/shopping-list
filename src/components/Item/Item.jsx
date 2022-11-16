import { BsImage } from "react-icons/bs";
import "./Item.css";
import { handleCheckBoxEvent } from "./utils";

const Item = ({ item, items, setItems }) => {
  return (
    <div className="item">
      <div key={item.id}>
        <div>
          <input
            type="checkbox"
            onClick={(e) => {
              handleCheckBoxEvent(e, item, items, setItems);
            }}
          ></input>
          {item.itemName.toUpperCase()}
          <span>, {item.itemPrice}</span>
        </div>
      </div>
      <div>
        <button>
          <BsImage style={{ height: "1.5em", width: "1.5em" }} />
        </button>
      </div>
    </div>
  );
};
export default Item;
