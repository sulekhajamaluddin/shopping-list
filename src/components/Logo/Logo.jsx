import { Image } from "../index";

// Logo should not be a React component, is just an image. I understand this on ultra big project but not at this stage
const Logo = () => {
  return (
    <>
      <Image className={"logo"} src={"logo.png"} alt={"logo"} />
    </>
  );
};
export default Logo;
