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
      <div className="footerdiv">
        <p>Journal</p>
        <p>Help Center</p>
        <p>Email Us</p>
        <p>Privacy Policy</p>
      </div>
      <button className="upbtn" onClick={scrollTop}>
        &uarr;
      </button>
      <div className="rights">
        <p> © 2023 All rights are reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
