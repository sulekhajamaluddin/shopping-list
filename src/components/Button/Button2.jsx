import PropTypes from "prop-types";
import "./Button.css";

export default function Button2({ text, cssClass, onClick }) {
  return (
    <button className={cssClass} onClick={() => onClick()}>
      {text}
    </button>
  );
}

// Optional if you want to enforce rules (https://reactjs.org/docs/typechecking-with-proptypes.html)
Button2.propTypes = {
  text: PropTypes.string.isRequired,
  cssClass: PropTypes.string.isRequired,
  onClick: PropTypes.Function.isRequired,
};
