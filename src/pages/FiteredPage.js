import { Link } from "react-router-dom";
import Nav from "../Nav";

function FilteredPage({
  query,
  allproducts,
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
    <div className="filtereddiv">
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
        {allproducts
          .filter(
            (item) =>
              item.title.toLowerCase().includes(query.toLowerCase()) && item
          )
          .map((item, i) => (
            <FilteredItem item={item} i={i} handleAddCart={handleAddCart} />
          ))}
      </ul>
    </div>
  );
}
function FilteredItem({ item, i, handleAddCart }) {
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

export default FilteredPage;
