import Nav from "../compounds/Nav";
import { Link } from "react-router-dom";
import Rating from "../compounds/Rating";
import { useEffect, useState } from "react";

function Orders({
  ordereditem,
  itemsAddedArray,
  setItemAddedArray,
  linkRef,
  logoRef,
  handleClickButtons,
  handleClickLogo,
  cartRef,
  handleClickCart,
  handleDeleteOrdered,
  handleAddCart,
}) {
  return (
    <>
      <Nav
        linkRef={linkRef}
        logoRef={logoRef}
        handleClickButtons={handleClickButtons}
        handleClickLogo={handleClickLogo}
        cartRef={cartRef}
        handleClickCart={handleClickCart}
        itemsAddedArray={itemsAddedArray}
      />
      <div className="ordersdiv">
        <h3>Your Orders</h3>
        {ordereditem.length > 0 ? (
          <ul className="orderitems">
            {ordereditem.map((added) => (
              <OrderedItem
                key={added.id}
                added={added}
                handleDeleteOrdered={handleDeleteOrdered}
                handleAddCart={handleAddCart}
                ordereditem={ordereditem}
              />
            ))}
          </ul>
        ) : (
          <NoOrder />
        )}
      </div>
    </>
  );
}

function OrderedItem({
  added,
  handleDeleteOrdered,
  handleAddCart,
  ordereditem,
}) {
  const [useRating, setUserRating] = useState("");

  const [selectrate, setSelectRate] = useState(null);

  function handleRate(item) {
    setSelectRate((currentid) => (currentid === item.id ? null : item.id));
  }

  return (
    <li>
      <img src={added.image} alt={added.title} />
      <p>{added.title}</p>
      <p>${added.price}</p>
      {!selectrate ? (
        <div className="rating">
          <div className="ratingdiv">
            <p>Rate:</p>
            <Rating size={25} onRate={setUserRating} />
          </div>
          {useRating && (
            <button onClick={() => handleRate(added)}>Save Rating</button>
          )}
        </div>
      ) : (
        <p>{`You rated ${useRating}⭐`}</p>
      )}

      <button className="cancel" onClick={() => handleDeleteOrdered(added.id)}>
        Cancel Order
      </button>
    </li>
  );
}

function NoOrder() {
  return (
    <div className="noitems">
      <h2>You have no current orders. Keep checking on our products!</h2>
      <button>
        <Link to="/" className="linkhome">
          {" "}
          Keep Shopping &larr;
        </Link>
      </button>
    </div>
  );
}

export default Orders;
