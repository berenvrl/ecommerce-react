import { Link } from "react-router-dom";
import Nav from "../Nav";

function AllProducts({
  allproducts,
  handleAddCart,
  itemsAddedArray,
  logoRef,
  handleClickLogo,
  cartRef,
  handleClickCart,
}) {
  return (
    <>
      <Nav
        itemsAddedArray={itemsAddedArray}
        logoRef={logoRef}
        handleClickLogo={handleClickLogo}
        cartRef={cartRef}
        handleClickCart={handleClickCart}
      />
      <ul className="productlist">
        {allproducts.map((item) => (
          <Product key={item.id} item={item} handleAddCart={handleAddCart} />
        ))}
      </ul>
      <button className="btnwrap">
        <Link to="/cart" className="seecartbtn">
          See Your Cart
        </Link>
      </button>
    </>
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

export default AllProducts;
