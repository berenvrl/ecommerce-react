import Paragraphs from "../components/Paragraphs";
import Nav from "../components/Nav";
import ScrollBar from "../components/ScrollBar";
import MainPart from "./MainPart";
import SearchBar from "../components/SearchBar";
import PopularSearches from "../components/PopularSearches";
import Brands from "../components/Brands";
import Categories from "../components/Categories";

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
