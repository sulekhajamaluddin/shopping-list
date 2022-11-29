import { useState, useEffect } from "react";
import "./App.css";
import { MainPage } from "../components";
import { getItemsFromLocalStorage, setItemsToLocalStorage } from "./services";
import { ItemsContext } from "../context";

/**
 * 1. Don't put App inside a folder, put it next to index.js
 * 2. Rename App.js to App.jsx so I know it is a React component
 * 3. Put the "export default" on the same line as function App
 */
export default function App() {
  const [openModal, setOpenModal] = useState(false);
  const [items, setItems] = useState(getItemsFromLocalStorage() || []);

  useEffect(() => {
    items.length !== 0 && setItemsToLocalStorage(items);
  }, [items]);

  return (
    // Comments -1 don't leave code commented. Delete it or put it on other branch
    <ItemsContext.Provider value={{ items, setItems }}>
      <MainPage openModal={openModal} setOpenModal={setOpenModal} />
    </ItemsContext.Provider>
  );
}
