import React from "react";
import "./product.css";
const Product = ({ productItem, handleAddProduct }) => {
  return (
    <>
      <div className="products">
        {productItem.map((x) => {
          return (
            <div>
              <img src={x.image} alt="images" width="20%" height="20%" />
              <div>
                <h3>{x.name}</h3>
              </div>
              <div>${x.price}</div>
              <div>
                <button onClick={() => handleAddProduct(x)}>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
