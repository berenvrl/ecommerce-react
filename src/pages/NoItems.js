import { useRef } from "react";
import { Link } from "react-router-dom";

export default function NoItems() {
  const homeRef = useRef(null);
  const handleClickHome = () => {
    homeRef.current.click();
  };

  return (
    <div className="noitems">
      <h2>You have no items in your cart. Keep checking on our products!</h2>
      <button onClick={() => handleClickHome()}>
        <Link to="/" className="linkhome" ref={homeRef}>
          {" "}
          Keep Shopping &larr;
        </Link>
      </button>
    </div>
  );
}
