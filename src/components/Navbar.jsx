import { Component } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/navbar.scss";

export default class Navbar extends Component {
  render() {
    return (
      <div className="main-navbar">
        {/* TODO Add an custom animated hamburger */}
        <FontAwesomeIcon
          icon={faBars}
          className="hamburger icon"
          onClick={() =>
            document.querySelector("#root > div > aside > nav").classList.toggle("active")
          }
        />
      </div>
    );
  }
}
