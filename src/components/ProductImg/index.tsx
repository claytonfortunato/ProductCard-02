import { useState } from "react";
import SofaImg from "../../assets/sofa.jpg";
import SofaGif from "../../assets/sofa.gif";
import Arrow from "../../assets/360icon.svg";
import Close from "../../assets/closeicon.svg";

import * as C from "./styles";

export const ProductImg = () => {
  const [toggle, setToggle] = useState(false);

  return toggle ? (
    <C.Container>
      <img src={Close} className="Close" onClick={() => setToggle(!toggle)} />
      <img src={SofaGif} />
    </C.Container>
  ) : (
    <C.Container>
      <img src={Arrow} className="Arrow" onClick={() => setToggle(!toggle)} />
      <img src={SofaImg} />
    </C.Container>
  );
};
