import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useRef } from "react";

function Cart({
  itemsAddedArray,
  handleDeleteAddedItem,
  logoRef,
  handleClickLogo,
  linkRef,
  handleClickButtons,
}) {
  const totalPrice = itemsAddedArray.reduce((acc, cur) => acc + cur.price, 0);
  //console.log(totalPrice);

  return (
    <>
      <Nav
        itemsAddedArray={itemsAddedArray}
        logoRef={logoRef}
        handleClickLogo={handleClickLogo}
        linkRef={linkRef}
        handleClickButtons={handleClickButtons}
      />
      <div className="cartdiv">
        <h3>Shopping Cart</h3>
        {itemsAddedArray.length > 0 ? (
          <ul className="cartitems">
            {itemsAddedArray.map((added) => (
              <AddedItem
                key={added.id}
                added={added}
                handleDeleteAddedItem={handleDeleteAddedItem}
              />
            ))}
          </ul>
        ) : (
          <NoItems />
        )}
        <div className="subtotal">
          <p>{`Subtotal: (${itemsAddedArray.length} item): $${totalPrice}`}</p>
          {itemsAddedArray.length > 0 && (
            <button>
              <Link to="/payment" className="proceedlink">
                Proceed to checkout
              </Link>
            </button>
          )}
        </div>
      </div>
    </>
  );
}

function NoItems() {
  const homeRef = useRef(null);
  const handleClickHome = () => {
    homeRef.current.click();
  };

  return (
    <div className="noitems">
      <h2>You have no items in your cart. Keep checking on our products!</h2>
      <button onClick={() => handleClickHome()}>
        <Link to="/" className="linkhome" ref={homeRef}>
          {" "}
          Keep Shopping &larr;
        </Link>
      </button>
    </div>
  );
}
function AddedItem({ added, handleDeleteAddedItem }) {
  return (
    <li>
      <img src={added.image} alt={added.title} />
      <p>{added.title}</p>
      <p>${added.price}</p>
      <button onClick={() => handleDeleteAddedItem(added)}>❌</button>
    </li>
  );
}
export default Cart;
