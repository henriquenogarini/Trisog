import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/"

const Footer: React.FC = () => {
  const logoFooter = 
    "https://firebasestorage.googleapis.com/v0/b/travelling-c5077.appspot.com/o/Header_Images%2FLogo_Trisog.png?alt=media&token=c0fe5c09-d59c-473a-bd3e-38f7408d0c93"
  const facebook = 
    "https://firebasestorage.googleapis.com/v0/b/travelling-c5077.appspot.com/o/Header_Images%2FFacebook.png?alt=media&token=cc1d8d3a-2f75-41de-969c-c3da9d8a762d"
  const twitter = 
    "https://firebasestorage.googleapis.com/v0/b/travelling-c5077.appspot.com/o/Header_Images%2FTwitter.png?alt=media&token=3112c64b-b199-44d5-b83a-24abf224d02c"
  const linkedin = 
    "https://firebasestorage.googleapis.com/v0/b/travelling-c5077.appspot.com/o/Header_Images%2FLinkedIn.png?alt=media&token=d12fb7a9-43e8-442f-81b5-cf6261f32118"

  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="logoFooter">
          <img src={logoFooter} alt="Logo Trisog" className="logoIcon" />
        </div>
        <div className="firstFooter">
          <p className="p1">Need any help?</p>
          <h1>Call Us: (888)1234 5678</h1>
          <p className="p2"></p>
        </div>
        <div className="imagesFirstFooter">
          <img src={facebook} alt="Facebook Icon Redirect" className="facebookIcon" />
          <img src={twitter} alt="Twitter Icon Redirect" className="twitterIcon" />
          <img src={linkedin} alt="LinkedIn Icon Redirect" className="linkedinIcon" />
        </div>
        <div className="footerLinks">
          <p className="p1">Company</p>
          <ul className="company">
            <li><Link to="/404">About Us</Link></li>
            <li><Link to="/404">Contact Us</Link></li>
            <li><Link to="/tours">Travel Guides</Link></li>
            <li><Link to="/404">Data Policy</Link></li>
          </ul>
          <p className="p1">Destinations</p>
          <ul className="destination">
            <li><Link to="/404">Las Vegas</Link></li>
            <li><Link to="/404">New York City</Link></li>
            <li><Link to="/404">San Francisco</Link></li>
            <li><Link to="/404">Hawaii</Link></li>
          </ul>
          <ul className="destinationTwo">
            <li><Link to="/404">Tokyo</Link></li>
            <li><Link to="/404">Sydney</Link></li>
            <li><Link to="/404">Melbourne</Link></li>
            <li><Link to="/404">Dubai</Link></li>
          </ul>
        </div>
        <div className="newsletter">
          <p className="p1">Sign up for our Newsletter</p>
          <input type="email" className="emailInput" placeholder="Your email address" />
          <button className="emailSubmit">Submit</button>
          <p className="rightReserved">2023 Trisog All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer