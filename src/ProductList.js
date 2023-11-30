import { useState } from "react";
import Nav from "./Nav";

function ProductList({
  products,
  handleAddCart,
  itemsAddedArray,
  linkRef,
  logoRef,
  handleClickButtons,
  handleClickLogo,
  cartRef,
  handleClickCart,
}) {
  return (
    <div className="productlistdiv">
      <Nav
        itemsAddedArray={itemsAddedArray}
        linkRef={linkRef}
        logoRef={logoRef}
        handleClickButtons={handleClickButtons}
        handleClickLogo={handleClickLogo}
        cartRef={cartRef}
        handleClickCart={handleClickCart}
      />
      <ul className="productlist">
        {products.map((item) => (
          <Product key={item.id} item={item} handleAddCart={handleAddCart} />
        ))}
      </ul>
    </div>
  );
}
function Product({ item, handleAddCart }) {
  return (
    <li className="item" key={item.id}>
      <h3>{item.title}</h3>
      <img src={item.image} alt={item.title} />
      <p>{item.description}</p>
      <p>
        Price: <span> ${item.price}</span>
      </p>
      <p>
        Rating⭐: <span>{`${item.rating.rate} (${item.rating.count})`}</span>
      </p>
      <button className="cartbtn" onClick={() => handleAddCart(item)}>
        Add to cart
      </button>
    </li>
  );
}

export default ProductList;
