import "./Button.css";

const Button = ({ text, classRequired, onClick }) => {
  return (
    <>
      <button className={classRequired} onClick={() => onClick()}>
        {text}
      </button>
    </>
  );
};
export default Button;