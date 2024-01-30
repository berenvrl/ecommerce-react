import { useEffect, useState } from "react";

export default function Cookies() {
  const [showCookieMessage, setShowCookiesMessage] = useState(true);

  function handleAcceptCookies() {
    setShowCookiesMessage(false);
    localStorage.setItem("cookiesAccepted", "true");
  }

  useEffect(function () {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (cookiesAccepted === "true") {
      setShowCookiesMessage(false);
    }
  }, []);

  if (!showCookieMessage) return null;

  return (
    <div className="cookie-message">
      <p>
        We use our own and third-party cookies for analytical purposes and to
        show you advertising and personalised content based on a profile
        prepared from your browsing habits. Accept all the cookies or manage
        your preferences in the settings panel.
      </p>
      <button className="cookies btn" onClick={() => handleAcceptCookies()}>
        Accept all
      </button>
    </div>
  );
}
