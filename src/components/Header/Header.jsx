import React from "react";
import "../Header/header.css";
import logo from "../../assets/beardo_logo.png";
import logo1 from "../../assets/vip.png";
const Header = () => {

  return (
    <>
      <header className="header">
        <div className="nav_wrapper">
          <div className="logo">
            <img className="logimg" src={logo} alt="logo" />
          </div>

          <div className="header_left">
            <span class="dropdown">
              <button class="dropbtn">
                Products
                <span className="loc ">
                  <i class="ri-arrow-down-s-line"></i>
                </span>
              </button>
              <div class="dropdown-content">
                <button class="dropbtn1">
                  Beard
                  <span className="loc ">
                    <i class="ri-arrow-right-s-line"></i>
                  </span>
                </button>

                <button class="dropbtn1">
                  Fragrance
                  <span className="loc ">
                    <i class="ri-arrow-right-s-line"></i>
                  </span>
                </button>

                <button class="dropbtn1">
                  Combos
                  <span className="loc ">
                    <i class="ri-arrow-right-s-line"></i>
                  </span>
                </button>

                <button class="dropbtn1">
                  Face
                  <span className="loc ">
                    <i class="ri-arrow-right-s-line"></i>
                  </span>
                </button>

                <button class="dropbtn1">
                  Body
                  <span className="loc ">
                    <i class="ri-arrow-right-s-line"></i>
                  </span>
                </button>

                <button class="dropbtn1">
                  Hair
                  <span className="loc ">
                    <i class="ri-arrow-right-s-line"></i>
                  </span>
                </button>

                <button class="dropbtn1">
                  Beardo Fashion
                  <span className="loc ">
                    <i class="ri-arrow-right-s-line"></i>
                  </span>
                </button>

                <button class="dropbtn1">
                  Trimmers
                  <span className="loc ">
                    <i class="ri-arrow-right-s-line"></i>
                  </span>
                </button>
              </div>
            </span>

            <span className="divtext">
              <h5 className="headtext">Gifts for men</h5>
            </span>

            <span className="divtext">
              <h5 className="headtext">About Us</h5>
            </span>
          </div>

          <div className="header_right">
            <span className="logo1">
              <img className="logimg1" src={logo1} alt="logo" />
            </span>

            <span className="search">
              <i class="ri-search-line"></i>
            </span>

            <span className="cart">
              <i class="ri-shopping-cart-2-line"></i>
            </span>

            <div class="dropdown1">
              <button class="dropbtn">
                My Account
                <span className="loc ">
                  <i class="ri-arrow-down-s-line"></i>
                </span>
              </button>
              <div class="dropdown-content1">
                <div>
                  <button class="dropbtn2">
                    Login/signup
                    <span className="loc1 ">
                      <i class="ri-arrow-right-s-line"></i>
                    </span>
                  </button>

                  <button class="dropbtn2">
                    VIP Benefits
                    <span className="loc1 ">
                      <i class="ri-arrow-right-s-line"></i>
                    </span>
                  </button>
                </div>

                <div>
                  <button class="dropbtn2">
                    Track orders
                    <span className="loc1 ">
                      <i class="ri-arrow-right-s-line"></i>
                    </span>
                  </button>

                  <button class="dropbtn2">
                    Balance &#8377;{0}
                    <span className="loc1 ">
                      <i class="ri-arrow-right-s-line"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>


          <div class="container1" onclick="myFunction(this)">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
         </div>
            </div>
           
        
        </div>
      </header>
    </>
  );
};

export default Header;
