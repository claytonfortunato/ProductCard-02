import ProductImg from "./components/ProductImg";
import ProductInfo from "./components/ProductInfo";
import * as C from "./styles";

function App() {
  return (
    <C.Container>
      <ProductImg />
      <ProductInfo />
    </C.Container>
  );
}

export default App;
