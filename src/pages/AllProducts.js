import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Product from "./Product";

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

export default AllProducts;
