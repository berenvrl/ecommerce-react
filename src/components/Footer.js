function Footer() {
  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="footer">
      <button className="nav-btn footerbtn">Follow Us</button>
      <ul className="footerdiv">
        <li>Journal</li>
        <li>Help Center</li>
        <li>Email Us</li>
        <li>Privacy Policy</li>
      </ul>
      <button className="upbtn" onClick={scrollTop}>
        &uarr;
      </button>
      <div className="rights">
        <p> © 2024 All rights are reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
