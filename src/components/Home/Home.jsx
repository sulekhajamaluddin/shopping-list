// import { useContext } from "react";
import "./Home.css";
import { Button, Logo, Image } from "../index";
// import { ModalContext } from "../../context/modalContext";

const Home = ({ handleAddItem, openModal, setOpenModal }) => {
  // const { openModal, setOpenModal } = useContext(ModalContext);

  return (
    <div className="home-container">
      <section className="logo-holder">
        <Logo />
      </section>
      <section>
        <Image
          className={"main-image"}
          src={"cart-shopping-list.png"}
          alt={"A cart and a shopping list"}
        />
      </section>
      <section className="content">
        <p className="title">EIKA's Shopping List</p>
        <p className="summary">
          Welcome to Eika's Shopping List. Here, you will be able to create a
          wishlist for the furnitures you would like to buy.
          <br />
          You can add items to the list by clicking on the Add Item button
          below.
          <br />
          When you click on the button below, a pop up will ask you for the name
          and price of the item. After you add the item, you can also upload an
          image by clicking on the camera icon.
        </p>
      </section>
      <section>
        <Button
          text={"Add First Item"}
          classRequired={"btn add-item-btn"}
          onClick={() => handleAddItem(openModal, setOpenModal)}
        />
      </section>
    </div>
  );
};
export default Home;
