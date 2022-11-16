import "./Message.css";
const Message = ({ alertMessage, classRequired }) => {
  return <div className={classRequired}>{alertMessage}</div>;
};
export default Message;
