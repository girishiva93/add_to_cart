import "./App.css";
import data from "./component/back/data/data";
import Header from "./component/front/Header/Header";
import Broker from "./component/front/Route/Broker";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
function App() {
  const { productItem } = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  return (
    <>
      <Router>
        <Header />
        <Broker
          productItem={productItem}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
        />
      </Router>
    </>
  );
}

export default App;
