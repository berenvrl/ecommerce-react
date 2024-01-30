import Nav from "../components/Nav";
import Product from "./Product";

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

export default ProductList;
