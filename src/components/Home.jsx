import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Home.css'

export const Home = () => {
  return (
    <div className="home-page">
      <header className="header">
        <nav className="nav">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search..." />
          </div>
          <ul className="nav-items">
            <li className="nav-item dropdown">
              <a href="#">New Cars</a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Search By Price</a>
                </li>
                <li>
                  <a href="#">Popular Brands</a>
                </li>
                <li>
                  <a href="#">Upcoming Cars</a>
                </li>
                <li>
                  <a href="#">Electric Cars</a>
                </li>
                <li>
                  <a href="#">New Car Launches</a>
                </li>
                <li>
                  <a href="#">Popular Cars</a>
                </li>
                <li>
                  <a href="#">Compare Cars</a>
                </li>
                <li>
                  <a href="#">EMI Calculator</a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a href="#">Used Cars</a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">By City</a>
                </li>
                <li>
                  <a href="#">By Model</a>
                </li>
                <li>
                  <a href="#">By Brand</a>
                </li>
                <li>
                  <a href="#">Buy Used Cars</a>
                </li>
                <li>
                  <a href="#">Explore Used Cars</a>
                </li>
                <li>
                  <a href="#">CarWale abSure</a>
                </li>
                <li>
                  <a href="#">Used Car Valuation</a>
                </li>
                <li>
                  <a href="#">My Listings</a>
                </li>
                <li>
                  <a href="#">Find Dealers</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#">Car Loan</a>
            </li>
            <li className="nav-item">
              <a href="#">Sell Car</a>
            </li>
            <li className="nav-item">
              <a href="#">News & Reviews</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
                <section className="brand-section">
                    <h2>SEARCH NEW CARS BY BRAND</h2>
                    <ul className="brand-list">
                        <li><Link to="/brands/audi"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7MsScpIPHz-h_bof5MskLYx53P5CLzydug&s" alt="Audi Logo" />Audi</Link></li>
                        <li><Link to="/brands/mercedes"><img src="https://w0.peakpx.com/wallpaper/266/460/HD-wallpaper-mercedes-benz-black-logo-net-thumbnail.jpg" alt="Mercedes Logo" />Mercedes</Link></li>
                        <li><Link to="/brands/jaguar"><img src="https://i.pinimg.com/originals/38/79/86/3879869e6ff77bddd95ccc5e8cb7c143.jpg" alt="Jaguar Logo" />Jaguar</Link></li>
                        <li><Link to="/brands/bmw"><img src="https://i.pinimg.com/originals/76/43/8a/76438aa6935c40af8abba922aea42013.png" alt="BMW Logo" />BMW</Link></li>
                        <li><Link to="/brands/mini-cooper"><img src="https://i.pinimg.com/736x/b6/4c/9e/b64c9e389ebd834ff954ba8664889e53.jpg" alt="Mini cooper Logo" />Mini Cooper</Link></li>
                        <li><Link to="/brands/skoda"><img src="https://e1.pxfuel.com/desktop-wallpaper/646/932/desktop-wallpaper-best-5-dsg-backgrounds-on-hip-skoda-logo-thumbnail.jpg" alt="Skoda Logo" />Skoda</Link></li>                      
                        <li><Link to="/brands/kia"><img src="https://i.pinimg.com/736x/1f/4c/06/1f4c060ca449e2f9a251aae440c4008f.jpg" alt="Kia Logo" />Kia</Link></li>
                        <li><Link to="/brands/hyundai"><img src="https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/4ca58833e08fc731b566920fa50a8d66/large.JPG" alt="Hyundai Logo" />Hyundai</Link></li>
                        <li><Link to="/brands/ford"><img src="https://images8.alphacoders.com/411/411302.jpg" alt="Mahindra Logo" />Ford</Link></li>
                        <li><Link to="/brands/nissan"><img src="https://mrwallpaper.com/images/thumbnail/nissan-logo-in-black-q52gnqlt3epskvu6.jpg" alt="Nissan Logo" />Nissan</Link></li>  
                    </ul>
                </section>
            </main>
    </div>
  );
};
