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

  return (
    <>
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
