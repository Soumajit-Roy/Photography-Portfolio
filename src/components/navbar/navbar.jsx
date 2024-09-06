import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="bg-img">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#6B8E23"
            fill-opacity="1"
            d="M0,288L21.8,250.7C43.6,213,87,139,131,128C174.5,117,218,171,262,170.7C305.5,171,349,117,393,85.3C436.4,53,480,43,524,85.3C567.3,128,611,224,655,234.7C698.2,245,742,171,785,160C829.1,149,873,203,916,192C960,181,1004,107,1047,96C1090.9,85,1135,139,1178,176C1221.8,213,1265,235,1309,218.7C1352.7,203,1396,149,1418,122.7L1440,96L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="nav-wrapper">
        <div className="nav-el">
        <h3 className="home-link">
              <a href="#">
                Home
              </a>
            </h3>
          <input type="checkbox" id="sidebar-active" />
          <label for="sidebar-active" class="open-sidebar-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#4E342E"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </label>
          <label id="overlay" for="sidebar-active"></label>
          <div className="links-container">
            <label for="sidebar-active" class="close-sidebar-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 -960 960 960"
                width="30px"
                fill="#4E342E"
              >
                <path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z" />
              </svg>
            </label>
            <h3>
              <a className="h3-links" href="#">Packages</a>
            </h3>
            <h3>
              <a className="h3-links" href="#">About</a>
            </h3>
            <h3>
              <a className="h3-links" href="#">Contact Us</a>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
