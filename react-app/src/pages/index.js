import {React, useEffect} from "react"
// import Spline from '@splinetool/react-spline'

import AOS from "aos";
import "aos/dist/aos.css";


import './homePage.css';

/*
function SplineState1() {
  return (
    <div class= "SplineState">
    <Spline scene="https://prod.spline.design/VlmQZKJJWnfu2Ftp/scene.splinecode" />
    </div>
  );
}
*/

function Hero() {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
      <div className = "hero">
        <div className = "heroText">
        <h1 data-aos = "fade-down" data-aos-duration="800" >Find your next home</h1>
        <h1 className = "big144px orange" data-aos="fade-up" data-aos-duration="1600" >TODAY</h1>
        <img src = "home/houseState1.png"></img>
        </div> 
      </div>  
  )
}

function WhatWeOffer() {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section>
      <div class = "what-we-offer">
        <h1  data-aos="zoom-y-out">What we <span className="orange">offer...</span></h1>
        <div class = "offCenterOffset">
        <div class = "topDownRoad">
          <img className = "topDownRoadImg" src = "home/road.png" data-aos="fade-up" data-aos-duration="2400" />

          <img className = "carModel" src = "home/carModel.png"></img>
        </div>
        <div class="topDownHouses">
          <img src = "home/redHouse.png" data-aos="fade-down" data-aos-duration="800" />
          <img src = "home/orangeHouse.png" data-aos="fade-right" data-aos-duration="1200" />
          <img src = "home/redHouse.png" data-aos="fade-up" data-aos-duration="1600" />
        </ div>
          {/*
          <img className="houseState2" src = "home/houseState2-cropped.png"></img>
          */}
        </div>
        <div class = "offCenterText">
          <p>Single Family Homes</p>
          <p>Beautifully updated homes with great locations.</p>
          <p>Cincinnati area (Norwood, Montgomery, and Mason)</p>
          <p>Non-smoking properties.</p>
          <p>Pet on case by case basis with fee.</p>
          <p>Minimum of 700+ credit score required.</p>
          <p>Tenant pays for all utilities.</p>
        </div>
      </div>
    </section>
    )
}

function ViewPropertyList() {

  useEffect(() => {
    AOS.init({
      once: false,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className = "view-property-list">
      <section className = "state3-section">
      {/*
      <div className = "housestate3-image-section">

        <img src = "home/houseState3-cropped.png"></img>
      </div>
      */}
      <div className = "state3-parent">
       <img src = "home/roadFront.png" className = "state3-road" data-aos="fade-up" data-aos-duration="1600"  />
        <div className = "state3-houses">
          <img src = "home/redHouseFront.png" data-aos="fade-down" data-aos-duration="400"  />
          <img src = "home/orangeHouseFront.png" data-aos="fade-down" data-aos-delay="200" data-aos-duration="2400"  />
          <img src = "home/redHouseFront.png" data-aos="fade-down" data-aos-duration="800"  />
        </div>
      </div>
      <a href = "./property-list">
          <button className = "available-homes-button">
            <h2>Available Homes</h2>
          </button>
      </a>
        </section>
    </div>
    )
}


function Home() {
  return (
    <div className="Home">
      <title>Leasing Cincy</title>
      <div class = "page-background">
        <section>
        <div className="Titlebar-offset"></div> 
        {/*<SplineState1 />*/}
          <Hero />
        </section>
        <WhatWeOffer />
        <ViewPropertyList />
      </div>
    </div>
  );
}


export default Home;