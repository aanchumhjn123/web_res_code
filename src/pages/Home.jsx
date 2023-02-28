import React from "react";
import { useState, useEffect } from 'react';

 
import "../pages/home.css";
import logo1 from "../../src/assets/beardo1.webp";
import logo2 from "../../src/assets/beardo-sec.webp";
import logo3 from "../../src/assets/Beardo2.png";
import beardoa from "../../src/assets/beardo-a.webp";
import beardob from "../../src/assets/beardo-b.webp";
import beardoc from "../../src/assets/beardo-c.webp";
import beardod from "../../src/assets/beardo-d.webp";
import beardoe from "../../src/assets/beardo-e.webp";
import beardof from "../../src/assets/beardo-f.webp";
import beardog from "../../src/assets/beardo-g.webp";
import beardoh from "../../src/assets/beardo-h.webp";
import beardoi from "../../src/assets/beardo-i.webp";
import beardoj from "../../src/assets/beardo-j.webp";
import beardok from "../../src/assets/beardo-k.webp";
import beardol from "../../src/assets/beardo-l.webp";
import cat1 from "../../src/assets/images-cat1.jpg";
import cat2 from "../../src/assets/cat2.jpg";
import cat3 from "../../src/assets/cat3.jpg";
import cat4 from "../../src/assets/cat4.png";
import deal1 from "../../src/assets/deal1.jpg";
import deal2 from "../../src/assets/deal2.jpg";
import deal3 from "../../src/assets/deal3.jpg";

const Home = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "March, 3, 2023";
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide  section_hero"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={logo1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={logo2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={logo3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="section">
        <div className="head-title">
          <h1>TOP SELLERS</h1>
          <span>See More</span>
        </div>
        <div
          id="carouselExampleControlsNoTouching"
          class="carousel slide"
          data-bs-touch="false"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="cardrow">
                <div class="card " className="card_width">
                  <img src={beardoa} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">beardo product</h5>
                    <span className="price">&#8377;{400}</span>
                    <button className="card_btn">
                      &#8377;{400} cashback for VIP
                    </button>
                  </div>
                </div>
                <div class="card " className="card_width">
                  <img src={beardob} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">beardo product</h5>
                    <span className="price">&#8377;{400}</span>
                    <button className="card_btn">
                      &#8377;{400} cashback for VIP
                    </button>
                  </div>
                </div>
                <div class="card " className="card_width">
                  <img src={beardoc} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">beardo product</h5>
                    <span className="price">&#8377;{400}</span>
                    <button className="card_btn">
                      &#8377;{400} cashback for VIP
                    </button>
                  </div>
                </div>
                <div class="card " className="card_width">
                  <img src={beardod} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">beardo product</h5>
                    <span className="price">&#8377;{400}</span>
                    <button className="card_btn">
                      &#8377;{400} cashback for VIP
                    </button>
                  </div>
                </div>
                <div class="card " className="card_width">
                  <img src={beardoe} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">beardo product</h5>
                    <span className="price">&#8377;{400}</span>
                    <button className="card_btn">
                      &#8377;{400} cashback for VIP
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="cardrow">
                <div class="card " className="card_width">
                  <img src={beardof} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">beardo product</h5>
                    <span className="price">&#8377;{400}</span>
                    <button className="card_btn">
                      &#8377;{400} cashback for VIP
                    </button>
                  </div>
                </div>
                <div class="card " className="card_width">
                  <img src={beardog} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">beardo product</h5>
                    <span className="price">&#8377;{400}</span>
                    <button className="card_btn">
                      &#8377;{400} cashback for VIP
                    </button>
                  </div>
                </div>
                <div class="card " className="card_width">
                  <img src={beardoh} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">beardo product</h5>
                    <span className="price">&#8377;{400}</span>
                    <button className="card_btn">
                      &#8377;{400} cashback for VIP
                    </button>
                  </div>
                </div>
                <div class="card " className="card_width">
                  <img src={beardoi} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">beardo product</h5>
                    <span className="price">&#8377;{400}</span>
                    <button className="card_btn">
                      &#8377;{400} cashback for VIP
                    </button>
                  </div>
                </div>
                <div class="card " className="card_width">
                  <img src={beardoj} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">beardo product</h5>
                    <span className="price">&#8377;{400}</span>
                    <button className="card_btn">
                      &#8377;{400} cashback for VIP
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="cardrow">
                <div class="card " className="card_width">
                  <img src={beardok} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">beardo product</h5>
                    <span className="price">&#8377;{400}</span>
                    <button className="card_btn">
                      &#8377;{400} cashback for VIP
                    </button>
                  </div>
                </div>
                <div class="card " className="card_width">
                  <img src={beardol} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">beardo product</h5>
                    <span className="price">&#8377;{400}</span>
                    <button className="card_btn">
                      &#8377;{400} cashback for VIP
                    </button>
                  </div>
                </div>
                <div class="card " className="card_width">
                  <img src={beardoa} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">beardo product</h5>
                    <span className="price">&#8377;{400}</span>
                    <button className="card_btn">
                      &#8377;{400} cashback for VIP
                    </button>
                  </div>
                </div>
                <div class="card " className="card_width">
                  <img src={beardob} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">beardo product</h5>
                    <span className="price">&#8377;{400}</span>
                    <button className="card_btn">
                      &#8377;{400} cashback for VIP
                    </button>
                  </div>
                </div>
                <div class="card " className="card_width">
                  <img src={beardoc} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">beardo product</h5>
                    <span className="price">&#8377;{400}</span>
                    <button className="card_btn">
                      &#8377;{400} cashback for VIP
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section className="section1">
        <div className="head-title2">
          <h1>Browse by Category</h1>
          <div class="row">
            <div class="column">
              <img src={cat1} alt="Nature" onclick="myFunction(this);" />
            </div>
            <div class="column">
              <img src={cat2} alt="Snow" onclick="myFunction(this);" />
            </div>
            <div class="column">
              <img src={cat3} alt="Mountains" onclick="myFunction(this);" />
            </div>
            <div class="column">
              <img src={cat4} alt="Lights" onclick="myFunction(this);" />
            </div>
            <div class="column">
              <img src={cat1} alt="Lights" onclick="myFunction(this);" />
            </div>
            <div class="column">
              <img src={cat2} alt="Lights" onclick="myFunction(this);" />
            </div>
          </div>
        </div>
      </section>

      <section className="section2">
        <div className="head-title3">
          <h1>deal of the Day</h1>
          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <div className="cardrow1">
                  <div class="card " className="card_width1">
                    <img src={deal1} class="card-img-top1" alt="..." />
                  </div>
                  <div class="card " className="card_width1">
                    <img src={deal2} class="card-img-top1" alt="..." />
                  </div>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <div className="cardrow1">
                  <div class="card " className="card_width1">
                    <img src={deal3} class="card-img-top1" alt="..." />
                  </div>
                  <div class="card " className="card_width1">
                    <img src={deal1} class="card-img-top1" alt="..." />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="cardrow1">
                  <div class="card " className="card_width1">
                    <img src={deal2} class="card-img-top1" alt="..." />
                  </div>
                  <div class="card " className="card_width1">
                    <img src={deal3} class="card-img-top1" alt="..." />
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="counter">
          <h6>DEAL ENDS IN : 
           <span>{days}</span>-
           <span>{hours}</span>-
           <span>{minutes}</span>-
           <span>{seconds}</span>
           </h6>
        </div>
      </section>
    </>
  );
};

export default Home;
