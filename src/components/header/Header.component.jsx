import React from "react";
// ? Styles
import "./header.styles.scss";
// ? Icons
import { faBars, faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// ? Pictures
import logo from "../../assests/Lifetwig.png";

const Header = ({ user: { picture, name } }) => {
  const burgerToggle = function () {
    let linksEl = document.querySelector(".narrowLinks");
    if (linksEl.style.display === "block") {
      linksEl.style.display = "none";
    } else {
      linksEl.style.display = "block";
    }
  };
  return (
    <div className="header">
      <nav>
        <div className="navWide">
          <div className="main-items">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>

            <div className="wideDiv">
              <p>Home Feed</p>
              <p>Map</p>
              <p>Family Tree</p>
              <p>Friends</p>
            </div>

            <div className="wideDiv">
              <img src={picture} alt="user" />
              <p>{name}</p>
              <FontAwesomeIcon className="icon" icon={faSearch} />
              <FontAwesomeIcon className="icon" icon={faBell} />
            </div>
          </div>
        </div>

        <div className="navNarrow">
          <div className="mobile-nav">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <FontAwesomeIcon
              className="icon"
              icon={faBars}
              onClick={burgerToggle}
            />
          </div>
          <div className="narrowLinks">
            <div className="links">
              <p>Home Feed</p>
              <p>Map</p>
              <p>Family Tree</p>
              <p>Friends</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
