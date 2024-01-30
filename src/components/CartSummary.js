import { Link } from "react-router-dom";

function CartSummary({ itemsAddedArray, children, cartRef, handleClickCart }) {
  return (
    <>
      {children}
      <div className="cartsummary">
        <p>{itemsAddedArray.length}</p>
        <button onClick={handleClickCart}>
          <Link to="/cart" ref={cartRef}></Link>
        </button>
      </div>
    </>
  );
}

export default CartSummary;
