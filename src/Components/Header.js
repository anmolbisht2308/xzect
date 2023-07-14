import React from "react";
import "./Header.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  return (
    <div className="top">
      <header class="header">
        <div class="hamburger-menu">
          <div class="hamburger-icon">
            <MenuIcon />
          </div>
        </div>
        <nav class="navigation">
          <ul class="social-links">
            <li>
              <a href="#">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <RssFeedIcon />
              </a>
            </li>
          </ul>
        </nav>

        <div className="logo">
          <h1>
            <span className="logo-highlight">M</span>ak
            <span className="logo-highlight">T</span>ub
          </h1>
        </div>

        <div class="search">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>
      </header>
      <div className="lowerheader">
        <div class="menu">
          <ul class="menu-items">
            <li class="dropdown">
              Home
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Option A</a>
                </li>
                <li>
                  <a href="#">Option B</a>
                </li>
                <li>
                  <a href="#">Option C</a>
                </li>
              </ul>
            </li>
            <li class="dropdown">
              Header Styles
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Option A</a>
                </li>
                <li>
                  <a href="#">Option B</a>
                </li>
                <li>
                  <a href="#">Option C</a>
                </li>
              </ul>
            </li>
            <li class="dropdown">
              Post Features
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Option A</a>
                </li>
                <li>
                  <a href="#">Option B</a>
                </li>
                <li>
                  <a href="#">Option C</a>
                </li>
              </ul>
            </li>
            <li class="dropdown">
              #Tag
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Option A</a>
                </li>
                <li>
                  <a href="#">Option B</a>
                </li>
                <li>
                  <a href="#">Option C</a>
                </li>
              </ul>
            </li>
            <li>Author</li>

            <li class="dropdown">
              <a href="#">Features</a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Option A</a>
                </li>
                <li>
                  <a href="#">Option B</a>
                </li>
                <li>
                  <a href="#">Option C</a>
                </li>
              </ul>
            </li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
