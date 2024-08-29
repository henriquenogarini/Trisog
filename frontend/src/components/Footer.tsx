import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Footer.css"

const Footer: React.FC = () => {
  const logoFooter = 
    "https://firebasestorage.googleapis.com/v0/b/travelling-c5077.appspot.com/o/Header_Images%2FLogo_Trisog_White.png?alt=media&token=7f17cedf-c818-438a-9fe1-bb7a934d6db4"
  const facebook = 
    "https://firebasestorage.googleapis.com/v0/b/travelling-c5077.appspot.com/o/Header_Images%2FFacebook.png?alt=media&token=cc1d8d3a-2f75-41de-969c-c3da9d8a762d"
  const twitter = 
    "https://firebasestorage.googleapis.com/v0/b/travelling-c5077.appspot.com/o/Header_Images%2FTwitter.png?alt=media&token=3112c64b-b199-44d5-b83a-24abf224d02c"
  const linkedin = 
    "https://firebasestorage.googleapis.com/v0/b/travelling-c5077.appspot.com/o/Header_Images%2FLinkedIn.png?alt=media&token=d12fb7a9-43e8-442f-81b5-cf6261f32118"

  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="firstFooterContainer">
          <div className="logoFooter">
            <img src={logoFooter} alt="Logo Trisog" className="logoIcon" />
          </div>
          <div className="firstFooter">
            <p className="p1">Need any help?</p>
            <h1>
              Call Us: <span>(888)1234 5678</span>
            </h1>
            <p className="p2">Love Street, Muscat, Oman</p>
            <p className="p3">exaample@trisog.com</p>
          </div>
          <div className="imagesFirstFooter">
            <a href="https://www.facebook.com/">
              <img src={facebook} alt="Facebook Icon Redirect" className="facebookIcon" />
            </a>
            <a href="https://x.com/">
              <img src={twitter} alt="Twitter Icon Redirect" className="twitterIcon" />
            </a>
            <a href="https://www.linkedin.com/">
              <img src={linkedin} alt="LinkedIn Icon Redirect" className="linkedinIcon" />
            </a>
          </div>
        </div>
        <div className="footerLinks">
          <div className="companyLinks">
            <p className="p1">Company</p>
            <ul className="company">
              <li><Link to="/404">About Us</Link></li>
              <li><Link to="/404">Contact Us</Link></li>
              <li><Link to="/tours">Travel Guides</Link></li>
              <li><Link to="/404">Data Policy</Link></li>
            </ul>
          </div>
          <div className="destinationsLinks">
            <p className="p1">Destinations</p>
            <ul>
              <li><Link to="/404">Las Vegas</Link></li>
              <li><Link to="/404">New York City</Link></li>
              <li><Link to="/404">San Francisco</Link></li>
              <li><Link to="/404">Hawaii</Link></li>
            </ul>
          </div>
          <div className="destinationsLinks2">
            <ul>
              <li><Link to="/404">Tokyo</Link></li>
              <li><Link to="/404">Sydney</Link></li>
              <li><Link to="/404">Melbourne</Link></li>
              <li><Link to="/404">Dubai</Link></li>
            </ul>
          </div>
        </div>
        <div className="newsletter">
          <p className="p1">Sign up Newsletter</p>
          <input type="email" className="emailInput" placeholder="Enter e-mail" />
          <button className="emailSubmit">Submit</button>
          <p className="rightReserved">2023 Trisog All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer