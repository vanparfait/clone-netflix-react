//npm i material-ui/icons ensuite npm i @material-ui/core pour telecharger les icones

import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

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
        <MenuIcon />
      </button>
      <img src="./images/netflix1.png" className="nav__logo" alt="Netflix" />
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
          <SearchIcon />
        </a>
        <a href="/" className="nav__action">
          DIRECT
        </a>
        <a href="/" className="nav__action">
          <CardGiftcardIcon />
        </a>
        <a href="/" className="nav__action">
          <NotificationsNoneIcon />
        </a>
        <a href="/" className="nav__action">
          <img
            src="./images/Netflix-avatar.png"
            className="avatar"
            alt="Avatar"
          />
        </a>
      </div>
    </div>
  );
};

export default Nav;
