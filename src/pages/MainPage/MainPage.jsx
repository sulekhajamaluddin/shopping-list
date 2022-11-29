import "./MainPage.css";
import { useContext } from "react";
import { handleAddItem } from "./utils";
import { ItemsContext } from "../../context";
import { Home, ItemList, Modal } from "../../components/index";

const MainPage = ({ openModal, setOpenModal }) => {
  const { items } = useContext(ItemsContext);
  const noItemsInLocalStorage = items.length === 0; // good name

  return (
    // Code inside Code (Nesting) This code looks hard to read, i will explain how to simplify it
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
