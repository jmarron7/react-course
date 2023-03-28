import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status)
    return <AiOutlineHeart color="#ff8b61" size={30} onClick={toggle} />;
  return <AiFillHeart color="#ff8b61" size={30} onClick={toggle} />;
};

export default Like;
