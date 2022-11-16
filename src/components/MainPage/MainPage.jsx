import "./MainPage.css";
import { useContext } from "react";
import { handleAddItem } from "./utils";
import { ItemsContext } from "../../context";
import { Home, ItemList, Modal } from "../index";

const MainPage = ({ openModal, setOpenModal }) => {
  const { items } = useContext(ItemsContext);
  const noItemsInLocalStorage = items.length === 0;

  return (
    <div className="container">
      <div className="main-container">
        {noItemsInLocalStorage ? (
          <Home
            handleAddItem={handleAddItem}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        ) : (
          <ItemList
            handleAddItem={handleAddItem}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        )}
        {openModal && (
          <Modal openModal={openModal} setOpenModal={setOpenModal} />
        )}
      </div>
    </div>
  );
};
export default MainPage;
