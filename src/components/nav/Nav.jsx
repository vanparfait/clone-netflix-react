import React, { useEffect, useState } from "react";
import "./Nav.scss";

const Nav = () => {
  const [navBlack, setNavBlack] = useState(false);
  const [toogleMenu, setToogleMenu] = useState(false);

  function handleClick() {
    setToogleMenu(!toogleMenu);
  }

  function transitionNav() {
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
  }

  useEffect(() => {
    document.addEventListener("scroll", transitionNav);
  });
  console.log(navBlack);
  /* Scroll*/

  /* Scroll*/

  return (
    <div
      className={`nav ${
        navBlack || toogleMenu ? "nav--black" : "nav--tranparent"
      } ${toogleMenu && "show"} `}
    >
      <button className="nav__burger" onClick={handleClick}>
        ---
      </button>
      <img src="./images/logo.png" className="nav__logo" alt="Netflix" />
      <div className="nav__links">
        <a href="/" className="nav__link">
          Accueil
        </a>
        <a href="/" className="nav__link">
          Series
        </a>
        <a href="/" className="nav__link">
          Films
        </a>
      </div>
      <div className="nav__actions">
        <a href="/" className="nav__action">
          Search
        </a>
        <a href="/" className="nav__action">
          DIRECT
        </a>
        <a href="/" className="nav__action">
          Gitf
        </a>
        <a href="/" className="nav__action">
          Notif
        </a>
        <a href="/" className="nav__action">
          <img src="./images/grey_star.png" alt="Avatar" />
        </a>
      </div>
    </div>
  );
};

export default Nav;
