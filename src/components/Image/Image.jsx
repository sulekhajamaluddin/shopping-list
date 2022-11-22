import "./Image.css";

const Image = ({ className, src, alt }) => {
  return (
    // No need to use <></> just return <img/> directly
    <>
      <img className={className} src={src} alt={alt} />
    </>
  );
};
export default Image;
