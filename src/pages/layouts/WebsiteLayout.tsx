import React,  { useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

import { Outlet } from 'react-router-dom'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

type Props = {
  onSearch: (keyword: string) => void
}

type FormInputs = {
  q: string
}

const WebsiteLayout = (props: Props) => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<FormInputs> = data => {

         props.onSearch(data.q)
         console.log(data.q);
         
        navigate(`/search?q=${data.q}`)

    }

  return (
    <div className="wrapper">

 <header>
  <div className="header">
    <div className="container">
      <div className="row">
        <div className="col-md-2 col-sm-2">
          <div className="logo">
            <a href="/"><img src="https://giaygiare.vn/upload/giaodien/logo-new-year.png" /></a>
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

                    </ul>
                  </li>
                  <li className="dorpdown">
                    <a href="#">USD</a>
                    <ul className="subnav">
                      <li><a href="#">USD</a></li>
                      <li><a href="#">VND</a></li>
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
                  <li><a href="Signin" className="log">Login</a></li>
                  <li><a href="Signup" className="reg">Register</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="clearfix" />
          <div className="header_bottom">
            <ul className="option">
              <li id="search" className="search">



                <form action='/search' onSubmit={handleSubmit(onSubmit)}>

                  <input  placeholder="Enter your search term..." type="text" {...register('q')} name="q" />
                  </form>


              </li>
              <li className="option-cart">
                <a href="Cart" className="cart-icon">cart <span className="cart_no">02</span></a>
                <ul className="option-cart-item">
                  <li>
                    <div className="cart-item">
                      <div className="image"><img src="images/products/thum/products-01.png"  /></div>
                      <div className="item-description">
                        <p className="name">Lincoln chair</p>
                        <p>Size: <span className="light-red">One size</span><br />Quantity: <span className="light-red">01</span></p>
                      </div>
                      <div className="right">
                        <p className="price">$30.00</p>
                        <a href="#" className="remove"><img src="images/remove.png" alt="remove" /></a>
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
                        <a href="#" className="remove"><img src="images/remove.png" alt="remove" /></a>
                      </div>
                    </div>
                  </li>
                  <li><span className="total">Total <strong>$60.00</strong></span><button className="checkout">CheckOut</button></li>
                </ul>
              </li>
            </ul>
            <div className="navbar-header"><button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span className="sr-only">Toggle navigation</span><span className="icon-bar" /><span className="icon-bar" /><span className="icon-bar" /></button></div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="active dropdown">
                  <a href="/" className="dropdown-toggle" data-toggle="dropdown">Home</a>
                  <div className="dropdown-menu">
                    <ul className="mega-menu-links">
                      <li><a href="/">home</a></li>
                      <li><a href="Productlist">Productlist</a></li>
                      <li><a href="Productgird">Productgird</a></li>
                      <li><a href="Details">Details</a></li>
                      <li><a href="Cart">Cart</a></li>
                      <li><a href="Contact">contact</a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="Productlist">men</a></li>
                <li><a href="Productgird">women</a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Fashion</a>
                  <div className="dropdown-menu mega-menu">
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <ul className="mega-menu-links">
                          <li><a href="Productgird">New Collection</a></li>
                          <li><a href="Productgird">Shirts &amp; tops</a></li>
                          <li><a href="Productgird">Laptop &amp; Brie</a></li>
                          <li><a href="Productgird">Dresses</a></li>
                          <li><a href="Productgird">Blazers &amp; Jackets</a></li>
                          <li><a href="Productgird">Shoulder Bags</a></li>
                        </ul>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <ul className="mega-menu-links">
                          <li><a href="Productgird">New Collection</a></li>
                          <li><a href="Productgird">Shirts &amp; tops</a></li>
                          <li><a href="Productgird">Laptop &amp; Brie</a></li>
                          <li><a href="Productgird">Dresses</a></li>
                          <li><a href="Productgird">Blazers &amp; Jackets</a></li>
                          <li><a href="Productgird">Shoulder Bags</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                <li><a href="Productgird">blog</a></li>
                <li><a href="Contact">contact us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="clearfix" />
</header>




        <main>
            <Outlet />
        </main>




   <footer>
  <div className="clearfix" />
  <div className="footer">
    <div className="footer-info">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-logo">
              <a href="/"><img src="https://giaygiare.vn/upload/giaodien/logo-new-year.png"  /></a>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4 className="title">Contact <strong>Info</strong></h4>
            <p> NguyenThaoVi, Cà Mau, Vietnam</p>
            <p>Call Us : (+84)85 994 3886</p>
            <p>Email : nguyendangtruongceo@gmail.com</p>
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
            <p>Copyright © 2012. Designed by <a href="https://www.facebook.com/profile.php?id=100044023059426">Nguyen Post School</a>. All rights reseved</p>
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