import Nav from "../Nav";
import { useState, useRef } from "react";
import Orders from "./Orders";
import { Link } from "react-router-dom";

function Payment({
  linkRef,
  handleClickButtons,
  logoRef,
  handleClickLogo,
  cartRef,
  handleClickCart,
  itemsAddedArray,
  setItemAddedArray,
  ordereditem,
  setOrderedItem,
  userRating,
}) {
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [cardnumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("Month");
  const [year, setYear] = useState("Year");
  const [cvc, setCVC] = useState("");

  function showlastfourdigits(cardnumber) {
    cardnumber = cardnumber.slice(-4).padStart(cardnumber.length, "*");
    return cardnumber;
  }

  const maskedNumber = showlastfourdigits(cardnumber);

  function handleCardNumberChange(event) {
    const { value } = event.target;
    setCardNumber(value);
  }

  function handleorderandcart() {
    setOrderedItem((ordereditem) => [...itemsAddedArray, ...ordereditem]);
    setItemAddedArray([]);
  }

  function handleFinalClick() {
    console.log(typeof cardnumber);
    console.log(cardnumber.length);
    console.log(success);

    if (
      !name.length > 0 ||
      cardnumber.length !== 16 ||
      month === "Month" ||
      year === "Year" ||
      cvc.length === 0
    ) {
      alert("You did not enter a correct information!");
    } else {
      setSuccess(true);
      handleorderandcart();
      console.log(ordereditem.userRating);
      console.log(itemsAddedArray);
    }
  }

  return (
    <>
      <Nav
        linkRef={linkRef}
        handleClickButtons={handleClickButtons}
        logoRef={logoRef}
        handleClickLogo={handleClickLogo}
        cartRef={cartRef}
        handleClickCart={handleClickCart}
        itemsAddedArray={itemsAddedArray}
      />
      <div className="paymentdiv">
        <h3>Card Details</h3>
        <div className="nameoncard">
          <p>Name on Card </p>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="cardnumber">
          <p>Card Number </p>
          <input
            type="text"
            placeholder="Card Number"
            value={maskedNumber}
            onChange={handleCardNumberChange}
          />
        </div>
        <img src="./creditcard.png" alt="credit card" />
        <div className="monthyearcvc">
          <div>
            <p>Month </p>
            <select value={month} onChange={(e) => setMonth(e.target.value)}>
              <option>Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>Jun</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>
          <div>
            <p>Year</p>
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              <option>Year</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
              <option>2029</option>
              <option>2030</option>
            </select>
          </div>
          <div>
            <p>CVC</p>
            <input
              type="number"
              placeholder="CVC"
              value={cvc}
              onChange={(e) => setCVC(e.target.value)}
            />
          </div>
        </div>
        <button onClick={() => handleFinalClick()}>Complete Payment</button>
        {success && (
          <>
            <ThankYou
              setName={setName}
              setCardNumber={setCardNumber}
              setMonth={setMonth}
              setYear={setYear}
              setCVC={setCVC}
              ordereditem={ordereditem}
            />
          </>
        )}
      </div>
    </>
  );
}

function ThankYou({
  setName,
  setCardNumber,
  setMonth,
  setYear,
  setCVC,
  ordereditem,
}) {
  const [isclicked, setisClicked] = useState(true);

  function clickclose() {
    setisClicked((item) => !item);
    console.log(isclicked);
    setName("");
    setCardNumber("");
    setMonth("Month");
    setYear("Year");
    setCVC("");
  }

  return (
    <>
      {isclicked && (
        <div className="overlay">
          <div className="thankyoudiv">
            <h3>We got your order! 🛍️ </h3>
            <p>Thank you for your shopping!!! 🎉</p>
            <button className="closebtn" onClick={() => clickclose()}>
              &times;
            </button>
            <button>
              <Link to="/orders" className="seeorderlink">
                See Orders
              </Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Payment;
