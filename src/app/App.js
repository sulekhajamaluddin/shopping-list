import { useState, useEffect } from "react";
import "./App.css";
import { MainPage } from "../components";
import { getItemsFromLocalStorage, setItemsToLocalStorage } from "./services";
import { ItemsContext } from "../context";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [items, setItems] = useState(getItemsFromLocalStorage() || []);

  useEffect(() => {
    items.length !== 0 && setItemsToLocalStorage(items);
  }, [items]);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {/* <ModalContext.Provider value={{ openModal, setOpenModal }}> */}
      <MainPage openModal={openModal} setOpenModal={setOpenModal} />
      {/* </ModalContext.Provider> */}
    </ItemsContext.Provider>
  );
}

export default App;
