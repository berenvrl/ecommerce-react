import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Categorie({
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
