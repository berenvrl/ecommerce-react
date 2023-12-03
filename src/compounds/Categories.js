import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Categorie from "./Categorie";

export default function Categories({
  selectedCategory,
  setSelectedCategory,
  setProducts,
  setAllProducts,
  products,
  linkRef,
  handleClickButtons,
}) {
  const [categoryarray, setCategoryArray] = useState([]);

  useEffect(function () {
    async function getallproducts() {
      const res = await fetch("http://fakestoreapi.com/products/categories");

      const data = await res.json();

      setCategoryArray(data);
    }
    getallproducts();
  }, []);

  useEffect(
    function () {
      async function seeAllProducts() {
        const response = await fetch("http://fakestoreapi.com/products");
        const data = await response.json();
        setAllProducts(data);
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
