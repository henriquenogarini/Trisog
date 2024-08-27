import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css";

const Header: React.FC = () => {
  const [search, setSearch] = useState(false);

  const logoUrl =
    "https://firebasestorage.googleapis.com/v0/b/travelling-c5077.appspot.com/o/Header_Images%2FLogo_Trisog.png?alt=media&token=c0fe5c09-d59c-473a-bd3e-38f7408d0c93";
  const userIconUrl =
    "https://firebasestorage.googleapis.com/v0/b/travelling-c5077.appspot.com/o/Header_Images%2FBonequinho_Login.png?alt=media&token=47586099-8e27-40a7-959e-7ce912f3613f";
  const searchIcon =
    "https://firebasestorage.googleapis.com/v0/b/travelling-c5077.appspot.com/o/Header_Images%2FLupa_Search.png?alt=media&token=f70352cd-371a-4326-a07f-734dc7d06fac";
  const twitterIcon = 
    "https://firebasestorage.googleapis.com/v0/b/travelling-c5077.appspot.com/o/Header_Images%2FTwitter_Icon.png?alt=media&token=e2ab4e1b-24f5-4303-804b-b0900e226e87"
  const linkedinIcon = 
    "https://firebasestorage.googleapis.com/v0/b/travelling-c5077.appspot.com/o/Header_Images%2FLinkedIn_Icon.png?alt=media&token=4bf6b45f-ee05-436e-9875-c7ee49a51716"
  const googleIcon = 
    "https://firebasestorage.googleapis.com/v0/b/travelling-c5077.appspot.com/o/Header_Images%2FGoogle_Icon.png?alt=media&token=52406c88-6905-4983-8025-4e656db3083f"
  const pinterestIcon = 
    "https://firebasestorage.googleapis.com/v0/b/travelling-c5077.appspot.com/o/Header_Images%2FPinterest_Icon.png?alt=media&token=0294908d-ecf8-473e-b843-5fd389d91f3f"
  const arrowDown = 
    "https://firebasestorage.googleapis.com/v0/b/travelling-c5077.appspot.com/o/Header_Images%2FArrow_Down.png?alt=media&token=856800ae-dbc7-46bf-a9bb-4d3c32f558ed"

  return (
    <>
     <div className="topBar">
        <div className="topBarLeft">
          <span>(000)999-898-999</span>
          <span className="separator">|</span>
          <span>info@trisog.com</span>
        </div>
        <div className="topBarRight">
          <a href="https://x.com"><img src={twitterIcon} alt="Twitter"/></a>
          <a href="https://linkedin.com"><img src={linkedinIcon} alt="LinkedIn"/></a>
          <a href="https://google.com"><img src={googleIcon} alt="Google"/></a>
          <a href="https://pinterest.com"><img src={pinterestIcon} alt="Pinterest"/></a>
          <span className="separator">|</span>
          <p>EUR</p>
          <img src={ arrowDown } alt="Arrow Down"/>
        </div>
      </div>
      <nav className="navbar">
        <div className="navbarContainer">
          <div className="navbarLeft">
            <div className="logoNav">
              <img src={logoUrl} alt="Logo Trisog" className="logoIcon" />
            </div>
            <ul className="navbarLinks">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/tours">Tours</Link></li>
              <li><Link to="/destination">Destination</Link></li>
              <li><Link to="/">Blog</Link></li>
              <li><Link to="/">Pages</Link></li>
              <li><Link to="/">Contact</Link></li>
            </ul>
          </div>
          <div className="navbarSearch">
            <div className={`searchContainer ${search ? "open" : ""}`}>
              <input
                type="text"
                className="searchInput"
                placeholder="Search a tour..."
              />
            </div>
            <button
              className="searchIcon"
              onClick={() => setSearch(!search)}
            >
              <img src={searchIcon} alt="Search Icon" className="searchIcon" />
            </button>
            <div className="loginContainer">
              <a href="/login">
                <img src={userIconUrl} alt="User Icon" className="userIcon" />
              </a>
              <Link to="/login" className="loginLink">Login / SignUp</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
