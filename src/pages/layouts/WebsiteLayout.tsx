import React from 'react'
import { Outlet } from 'react-router-dom'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (

  <div className="wrapper">
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-2">
            <div className="logo">
              <a href="index.html"><img src="images/logo.png" alt="FlatShop" /></a>
            </div>
          </div>
          <div className="col-md-10 col-sm-10">
            <div className="header_top">
              <div className="row">
                <div className="col-md-3">
                  <ul className="option_nav">
                    <li className="dorpdown">
                      <a href="#">Eng</a>
                      <ul className="subnav">
                        <li><a href="#">Eng</a></li>
                        <li><a href="#">Vns</a></li>
                        <li><a href="#">Fer</a></li>
                        <li><a href="#">Gem</a></li>
                      </ul>
                    </li>
                    <li className="dorpdown">
                      <a href="#">USD</a>
                      <ul className="subnav">
                        <li><a href="#">USD</a></li>
                        <li><a href="#">UKD</a></li>
                        <li><a href="#">FER</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="topmenu">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Recruiment</a></li>
                    <li><a href="#">Media</a></li>
                    <li><a href="#">Support</a></li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <ul className="usermenu">
                    <li><a href="checkout.html" className="log">Login</a></li>
                    <li><a href="checkout2.html" className="reg">Register</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="clearfix" />
            <div className="header_bottom">
              <ul className="option">
                <li id="search" className="search">
                  <form><input className="search-submit" type="submit" /><input className="search-input" placeholder="Enter your search term..." type="text" name="search" /></form>
                </li>
                <li className="option-cart">
                  <a href="#" className="cart-icon">cart <span className="cart_no">02</span></a>
                  <ul className="option-cart-item">
                    <li>
                      <div className="cart-item">
                        <div className="image"><img src="images/products/thum/products-01.png" /></div>
                        <div className="item-description">
                          <p className="name">Lincoln chair</p>
                          <p>Size: <span className="light-red">One size</span><br />Quantity: <span className="light-red">01</span></p>
                        </div>
                        <div className="right">
                          <p className="price">$30.00</p>
                          <a href="#" className="remove"><img src="images/remove.png"  /></a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="cart-item">
                        <div className="image"><img src="images/products/thum/products-02.png"  /></div>
                        <div className="item-description">
                          <p className="name">Lincoln chair</p>
                          <p>Size: <span className="light-red">One size</span><br />Quantity: <span className="light-red">01</span></p>
                        </div>
                        <div className="right">
                          <p className="price">$30.00</p>
                          <a href="#" className="remove"><img src="images/remove.png"  /></a>
                        </div>
                      </div>
                    </li>
                    <li><span className="total">Total <strong>$60.00</strong></span><button className="checkout" >CheckOut</button></li>
                  </ul>
                </li>
              </ul>
              <div className="navbar-header"><button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span className="sr-only">Toggle navigation</span><span className="icon-bar" /><span className="icon-bar" /><span className="icon-bar" /></button></div>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li className="active dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Home</a>
                    <div className="dropdown-menu">
                      <ul className="mega-menu-links">
                        <li><a href="index.html">home</a></li>
                        <li><a href="home2.html">home2</a></li>
                        <li><a href="home3.html">home3</a></li>
                        <li><a href="productlitst.html">Productlitst</a></li>
                        <li><a href="productgird.html">Productgird</a></li>
                        <li><a href="Details">Details</a></li>
                        <li><a href="cart.html">Cart</a></li>
                        <li><a href="checkout.html">CheckOut</a></li>
                        <li><a href="checkout2.html">CheckOut2</a></li>
                        <li><a href="Contact">contact</a></li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="productgird.html">men</a></li>
                  <li><a href="productlitst.html">women</a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Fashion</a>
                    <div className="dropdown-menu mega-menu">
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          <ul className="mega-menu-links">
                            <li><a href="productgird.html">New Collection</a></li>
                            <li><a href="productgird.html">Shirts &amp; tops</a></li>
                            <li><a href="productgird.html">Laptop &amp; Brie</a></li>
                            <li><a href="productgird.html">Dresses</a></li>
                            <li><a href="productgird.html">Blazers &amp; Jackets</a></li>
                            <li><a href="productgird.html">Shoulder Bags</a></li>
                          </ul>
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <ul className="mega-menu-links">
                            <li><a href="productgird.html">New Collection</a></li>
                            <li><a href="productgird.html">Shirts &amp; tops</a></li>
                            <li><a href="productgird.html">Laptop &amp; Brie</a></li>
                            <li><a href="productgird.html">Dresses</a></li>
                            <li><a href="productgird.html">Blazers &amp; Jackets</a></li>
                            <li><a href="productgird.html">Shoulder Bags</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li><a href="productgird.html">gift</a></li>
                  <li><a href="productgird.html">kids</a></li>
                  <li><a href="productgird.html">blog</a></li>
                  <li><a href="productgird.html">jewelry</a></li>
                  <li><a href="Contact">contact us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



        <main>
            <Outlet />
        </main>

        <footer>
            
        <div className="footer">
      <div className="footer-info">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-logo">
                <a href="#"><img src="images/logo.png"  /></a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4 className="title">Contact <strong>Info</strong></h4>
              <p>No. 08, Nguyen Trai, Hanoi , Vietnam</p>
              <p>Call Us : (084) 1900 1008</p>
              <p>Email : michael@leebros.us</p>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4 className="title">Customer<strong> Support</strong></h4>
              <ul className="support">
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Payment Option</a></li>
                <li><a href="#">Booking Tips</a></li>
                <li><a href="#">Infomation</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4 className="title">Get Our <strong>Newsletter </strong></h4>
              <p>Lorem ipsum dolor ipsum dolor.</p>
              <form className="newsletter">
                <input type="text"  placeholder="Type your email...." />
                <input type="submit" defaultValue="SignUp" className="button" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-info">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>Copyright © 2012. Designed by <a href="#">Michael Lee</a>. All rights reseved</p>
            </div>
            <div className="col-md-6">
              <ul className="social-icon">
                <li>
                  <a href="#" className="linkedin" />
                </li>
                <li>
                  <a href="#" className="google-plus" />
                </li>
                <li>
                  <a href="#" className="twitter" />
                </li>
                <li>
                  <a href="#" className="facebook" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

        </footer>
  </div>
  )
}

export default WebsiteLayout