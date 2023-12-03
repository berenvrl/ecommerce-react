import Paragraphs from "../compounds/Paragraphs";
import Nav from "../compounds/Nav";
import ScrollBar from "../compounds/ScrollBar";
import MainPart from "./MainPart";
import SearchBar from "../compounds/SearchBar";
import PopularSearches from "../compounds/PopularSearches";
import Brands from "../compounds/Brands";
import Categories from "../compounds/Categories";

function HomePage({
  selectedCategory,
  setSelectedCategory,
  setProducts,
  handleAddItems,
  setAllProducts,
  allproducts,
  products,
  query,
  setQuery,
  itemsAddedArray,
  linkRef,
  handleClickButtons,
  cartRef,
  handleClickCart,
}) {
  return (
    <>
      <Nav
        itemsAddedArray={itemsAddedArray}
        linkRef={linkRef}
        handleClickButtons={handleClickButtons}
        cartRef={cartRef}
        handleClickCart={handleClickCart}
      />
      <ScrollBar />
      <MainPart>
        <SearchBar
          query={query}
          setQuery={setQuery}
          allproducts={allproducts}
          handleAddItems={handleAddItems}
        />
      </MainPart>
      <PopularSearches />
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setProducts={setProducts}
        setAllProducts={setAllProducts}
        products={products}
        linkRef={linkRef}
        handleClickButtons={handleClickButtons}
      />
      <Paragraphs />
      <Brands />
      {/* {selectedCategory !== null && (
        <ProductList products={products} handleAddItems={handleAddItems} />
      )} */}
    </>
  );
}

export default HomePage;
