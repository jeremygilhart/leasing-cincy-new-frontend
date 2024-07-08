import React, {useState} from "react"


import idaAve1 from "../2539-ida-ave-1.webp"
import idaAve2 from "../2539-ida-ave-2.webp"
import idaAve3 from "../2539-ida-ave-3.webp"
import idaAve4 from "../2539-ida-ave-4.webp"
import idaAve5 from "../2539-ida-ave-5.webp"
import idaAve6 from "../2539-ida-ave-6.webp"
import idaAve7 from "../2539-ida-ave-7.webp"
import idaAve8 from "../2539-ida-ave-8.webp"
import idaAve9 from "../2539-ida-ave-9.webp"
import idaAve10 from "../2539-ida-ave-10.webp"


export default function Carousel({
  onClose
}) {
  /* https://webdesign.tutsplus.com/how-to-build-a-simple-carousel-with-vanilla-javascript--cms-41734t */
  const closeButton = document.getElementById("slide-arrow-close");
  const prevButton = document.getElementById("slide-arrow-prev");
  const nextButton = document.getElementById("slide-arrow-next");
/*
  nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
  });
  prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  });*/
  function nextSlide() {
    const slidesContainer = document.getElementById("slides-container");
    const slide = document.querySelector(".slide");
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
    
  }

  function prevSlide() {
    const slidesContainer = document.getElementById("slides-container");
    const slide = document.querySelector(".slide");
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  }

  return (
  <div className="carousel">
    <div class="slider-wrapper">
      <div class="close-button-parent" >
        <button class="close-button" id="close-button" onClick={onClose}>
          &#10006;
        </button>
      </div>
      <button class="slide-arrow" id="slide-arrow-prev" onClick={prevSlide}>
        &#8249;
      </button>
      
      <button class="slide-arrow" id="slide-arrow-next" onClick={nextSlide}>
        &#8250;
      </button>
      
      <ul class="slides-container" id="slides-container">
        <li class="slide"><img src={idaAve1}/></li>
        <li class="slide"><img src={idaAve2}/></li>
        <li class="slide"><img src={idaAve3}/></li>
        <li class="slide"><img src={idaAve4}/></li>
        <li class="slide"><img src={idaAve5}/></li>
        <li class="slide"><img src={idaAve6}/></li>
        <li class="slide"><img src={idaAve7}/></li>
        <li class="slide"><img src={idaAve8}/></li>
        <li class="slide"><img src={idaAve9}/></li>
        <li class="slide"><img src={idaAve10}/></li>
      </ul>
    </div>
  </div>
  )
}
