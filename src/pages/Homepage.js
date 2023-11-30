import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Paragraphs from "../Paragraphs";
import ProductList from "../ProductList";
import { useKey } from "../useKey";
import FilteredPage from "./FiteredPage";
import Nav from "../Nav";
import ScrollBar from "../ScrollBar";

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

function MainPart({ children }) {
  return (
    <div className="mainpart">
      <h1>Your Favorite store with trend brands in one place</h1>
      <h2>Find what you look for faster</h2>
      {children}
    </div>
  );
}
function SearchBar({ query, setQuery, allproducts, handleAddItems }) {
  const inputEl = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;

    setQuery(" ");
  });

  return (
    <div className="search">
      <input
        className="input"
        type="text"
        placeholder="Search an Item..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query.length > 0 ? (
        <button>
          <Link to="filtered" className="search-link">
            <span>
              <img src="./iconsearch.svg" alt="serach icon" />
            </span>{" "}
            Search
          </Link>
        </button>
      ) : (
        <button>
          <span>
            <img src="./iconsearch.svg" alt="serach icon" />
          </span>{" "}
          Search
        </button>
      )}
    </div>
  );
}
function Warning() {}
function PopularSearches() {
  return (
    <div className="popularsearches">
      <h3>Popular Searches:</h3>
      <ul className="pop-list">
        <li>Down Puffer</li>
        <li>Gucci Clothing</li>
        <li>Wool scarf</li>
        <li>By far</li>
        <li>Outdoors</li>
        <li>Cartier bracelet</li>
        <li>Patagonia</li>
        <li>Vintage Y2K</li>
        <li>Chloe</li>
        <li>APC</li>
        <li>Prada Shirt</li>
      </ul>
    </div>
  );
}
function Brands() {
  return (
    <div className="logocontainer">
      <h3>Brands: </h3>
      <div className="scroll">
        <div className="scrollimage">
          <img src="../boss.png" alt="boss logo" />
          <img src="../channel.png" alt="boss logo" />
          <img src="../dior.jpg" alt="boss logo" />
          <img src="../gucci.png" alt="boss logo" />
          <img src="../prada.png" alt="boss logo" />
        </div>
        <div className="scrollimage">
          <img src="../boss.png" alt="boss logo" />
          <img src="../channel.png" alt="boss logo" />
          <img src="../dior.jpg" alt="boss logo" />
          <img src="../gucci.png" alt="boss logo" />
          <img src="../prada.png" alt="boss logo" />
        </div>
      </div>
    </div>
  );
}

function Categories({
  selectedCategory,
  setSelectedCategory,
  setProducts,
  setAllProducts,
  products,
  linkRef,
  handleClickButtons,
}) {
  const [categoryarray, setCategoryArray] = useState([]);

  async function getallproducts() {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    //console.log(res);
    const data = await res.json();
    //console.log(data);
    setCategoryArray(data);
  }

  useEffect(function () {
    getallproducts();
  }, []);

  useEffect(
    function () {
      async function seeAllProducts() {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setAllProducts(data);
        // console.log(data);
      }
      seeAllProducts();
    },
    [setAllProducts]
  );

  return (
    <div className="categorycontainer">
      <h3>Categories</h3>
      <ul className="categories">
        {categoryarray.map((category, i) => (
          <Categorie
            category={category}
            i={i}
            key={category}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setProducts={setProducts}
            products={products}
          />
        ))}
      </ul>
      <div className="btnwrapdiv">
        <button onClick={handleClickButtons}>
          <Link to="allproducts" className="linkbtn" ref={linkRef}>
            {" "}
            See All Products &rarr;
          </Link>
        </button>
      </div>
    </div>
  );
}
function Categorie({
  category,
  i,
  selectedCategory,
  setSelectedCategory,
  setProducts,
  products,
}) {
  const [categoryImage, setCategoryImage] = useState("");

  const butn = useRef(null);
  const categoryRef = useRef(null);

  const handleCategoryClick = () => {
    categoryRef.current.click();
  };
  function handleClickCategory(clickedCategory) {
    handleCategoryClick();

    //console.log(clickedCategory);
    setSelectedCategory(clickedCategory);

    fetch(`https://fakestoreapi.com/products/category/${clickedCategory}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
    //console.log(products);
  }

  // useEffect(
  //   function () {
  //     if (selectedCategory) {
  //       async function getallproductsOfCategory() {
  //         const res = await fetch(
  //           `https://fakestoreapi.com/products/category/${selectedCategory}`
  //         );

  //         const data = await res.json();
  //         console.log(data);
  //         setProducts(data);
  //       }
  //       getallproductsOfCategory();
  //     }
  //   },
  //   [selectedCategory, setProducts, setSelectedCategory]
  // );

  useEffect(
    function () {
      async function getCategoryImage() {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        const datafinal = await response.json();
        const cateimage = datafinal[2]?.image;
        //console.log(datafinal);

        setCategoryImage(cateimage);
      }
      getCategoryImage();
    },
    [category, i]
  );

  const newcategoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <li
      className="category"
      style={{ backgroundImage: `url(${categoryImage})` }}
    >
      <button onClick={() => handleClickCategory(category)} ref={butn}>
        <Link to="products" className="productlink" ref={categoryRef}>
          {newcategoryName} &rarr;
        </Link>
      </button>
    </li>
  );
}

export default HomePage;
