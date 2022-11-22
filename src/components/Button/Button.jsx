import "./Button.css";

// Why is this a .jsx file and is a .js file when both are React components?
const Button = ({ text, classRequired, onClick }) => {
  return (
    <>
      <button className={classRequired} onClick={() => onClick()}>
        {text}{" "}
      </button>
    </>
  );
};
export default Button;
