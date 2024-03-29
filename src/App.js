import React from "react";
import "./App.css";
import { useState, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLocalStorageState } from "./components/useLocalStorageState";
import HomePage from "./pages/Homepage";
import Footer from "./components/Footer";
import ProductList from "./pages/ProductList";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import Cookies from "./components/Cookies";
import FilteredPage from "./pages/FiteredPage";
import Payment from "./pages/Payment";
import Orders from "./pages/Orders";

export default function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [allproducts, setAllProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [itemsAddedArray, setItemAddedArray] = useState([]);
  const [ordereditem, setOrderedItem] = useLocalStorageState([], "ordereditem");

  function handleDeleteAddedItem(selected) {
    setItemAddedArray((itemsAddedArray) =>
      itemsAddedArray.filter((item) => item.id !== selected.id)
    );
  }

  function handleAddCart(item) {
    setItemAddedArray((itemsAddedArray) => [...itemsAddedArray, item]);
  }

  function handleDeleteOrdered(id) {
    setOrderedItem((ordereditem) =>
      ordereditem.filter((item) => item.id !== id)
    );
  }

  const linkRef = useRef(null);
  const handleClickButtons = () => {
    linkRef.current.click();
    setQuery("");
  };

  const logoRef = useRef(null);
  const handleClickLogo = () => {
    logoRef.current.click();
    setQuery("");
  };
  const cartRef = useRef(null);
  const handleClickCart = () => {
    cartRef.current.click();
    setQuery("");
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                itemsAddedArray={itemsAddedArray}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                setProducts={setProducts}
                products={products}
                setAllProducts={setAllProducts}
                query={query}
                setQuery={setQuery}
                allproducts={allproducts}
                handleClickButtons={handleClickButtons}
                linkRef={linkRef}
                cartRef={cartRef}
                handleClickCart={handleClickCart}
              />
            }
          />
          <Route
            path="products"
            element={
              <ProductList
                products={products}
                handleAddCart={handleAddCart}
                itemsAddedArray={itemsAddedArray}
                linkRef={linkRef}
                handleClickButtons={handleClickButtons}
                logoRef={logoRef}
                handleClickLogo={handleClickLogo}
                cartRef={cartRef}
                handleClickCart={handleClickCart}
              />
            }
          />
          <Route
            path="allproducts"
            element={
              <AllProducts
                allproducts={allproducts}
                itemsAddedArray={itemsAddedArray}
                handleAddCart={handleAddCart}
                logoRef={logoRef}
                handleClickLogo={handleClickLogo}
                linkRef={linkRef}
                handleClickButtons={handleClickButtons}
                cartRef={cartRef}
                handleClickCart={handleClickCart}
              />
            }
          />
          <Route
            path="cart"
            element={
              <Cart
                itemsAddedArray={itemsAddedArray}
                handleDeleteAddedItem={handleDeleteAddedItem}
                handleAddCart={handleAddCart}
                logoRef={logoRef}
                handleClickLogo={handleClickLogo}
                linkRef={linkRef}
                handleClickButtons={handleClickButtons}
              />
            }
          />
          <Route
            path="filtered"
            element={
              <FilteredPage
                query={query}
                allproducts={allproducts}
                handleAddCart={handleAddCart}
                itemsAddedArray={itemsAddedArray}
                linkRef={linkRef}
                handleClickButtons={handleClickButtons}
                logoRef={logoRef}
                handleClickLogo={handleClickLogo}
                cartRef={cartRef}
                handleClickCart={handleClickCart}
              />
            }
          />
          <Route
            path="payment"
            element={
              <Payment
                itemsAddedArray={itemsAddedArray}
                setItemAddedArray={setItemAddedArray}
                linkRef={linkRef}
                handleClickButtons={handleClickButtons}
                logoRef={logoRef}
                handleClickLogo={handleClickLogo}
                cartRef={cartRef}
                handleClickCart={handleClickCart}
                ordereditem={ordereditem}
                setOrderedItem={setOrderedItem}
              />
            }
          />
          <Route
            path="orders"
            element={
              <Orders
                ordereditem={ordereditem}
                itemsAddedArray={itemsAddedArray}
                setItemAddedArray={setItemAddedArray}
                linkRef={linkRef}
                logoRef={logoRef}
                handleClickButtons={handleClickButtons}
                handleClickLogo={handleClickLogo}
                cartRef={cartRef}
                handleClickCart={handleClickCart}
                handleDeleteOrdered={handleDeleteOrdered}
                handleAddCart={handleAddCart}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Cookies />
    </div>
  );
}
