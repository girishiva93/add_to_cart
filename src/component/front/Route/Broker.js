import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../product/Product";
import Cart from "../cart/Cart";
const Broker = ({ productItem, cartItems, handleAddProduct }) => {
  return (
    <Fragment>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Products
              productItem={productItem}
              handleAddProduct={handleAddProduct}
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} />
          }
        ></Route>
      </Routes>
    </Fragment>
  );
};

export default Broker;
