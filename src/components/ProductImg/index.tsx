import { useState } from "react";
import SofaImg from "../../assets/sofa.jpg";
import SofaGif from "../../assets/sofa.gif";

import { TiArrowSync } from "react-icons/Ti";
import { AiOutlineClose } from "react-icons/ai";

import * as C from "./styles";

export const ProductImg = () => {
  const [toggle, setToggle] = useState(false);

  return toggle ? (
    <C.Container>
      <AiOutlineClose
        size={32}
        color="#271A45"
        onClick={() => setToggle(!toggle)}
      />
      <img src={SofaGif} />
    </C.Container>
  ) : (
    <C.Container>
      <TiArrowSync size={32} onClick={() => setToggle(!toggle)} />
      <img src={SofaImg} />
    </C.Container>
  );
};
