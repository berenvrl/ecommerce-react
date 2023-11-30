import Logo from "./Logo";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";

function Nav({
  itemsAddedArray,
  logoRef,
  handleClickLogo,
  linkRef,
  handleClickButtons,
  cartRef,
  handleClickCart,
}) {
  return (
    <nav className="nav">
      <Logo>
        <button className="logo" onClick={handleClickLogo}>
          <Link to="/" className="logolink" ref={logoRef}>
            Sophisticated
          </Link>
        </button>
      </Logo>
      <button className="nav-btn" onClick={handleClickButtons}>
        <Link to="/allproducts" ref={linkRef} className="allproductslink">
          All Products
        </Link>
      </button>
      <button className="orderbtn">
        <Link to="/orders" className="orderslink">
          Orders
        </Link>
      </button>
      <CartSummary
        itemsAddedArray={itemsAddedArray}
        cartRef={cartRef}
        handleClickCart={handleClickCart}
      >
        {/* <Link to="/cart"></Link> */}
      </CartSummary>
    </nav>
  );
}

export default Nav;
