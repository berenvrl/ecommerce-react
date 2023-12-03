import Nav from "../compounds/Nav";
import NoItems from "./NoItems";
import AddedItem from "./AddedItem";
import { Link } from "react-router-dom";

function Cart({
  itemsAddedArray,
  handleDeleteAddedItem,
  logoRef,
  handleClickLogo,
  linkRef,
  handleClickButtons,
}) {
  const totalPrice = itemsAddedArray.reduce((acc, cur) => acc + cur.price, 0);

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

export default Cart;
