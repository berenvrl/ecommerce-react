import Nav from "../compounds/Nav";
import FilteredItem from "./FilteredItem";

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

export default FilteredPage;
