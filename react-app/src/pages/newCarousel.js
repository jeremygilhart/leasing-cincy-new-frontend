import React, {useState} from "react"
import './newCarousel.css';

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

// Credit:
// https://css-tricks.com/how-to-make-a-css-only-carousel/

export default function NewCarousel({imageDirectory, images}) {
  // let root = "2539-ida-ave"
  // let images = ["2539-ida-ave-7.webp", "2539-ida-ave-10.webp"]
  let navImages = [];
  let galleryImages = [];
  for (let i = 0; i < images.length; i++) {
    navImages.push(
      <a href={"#image-" + i}>
        <img className="lil-nav__img" src={imageDirectory + "/" + images[i]} alt={"image #" + i} />
      </a>
      )
    galleryImages.push(
      <img className="gallery__img" id={"image-" + i} src={imageDirectory + "/" + images[i]} alt={"image #" + i} />
      )
    console.log("#image-" + i)
  }

  return (
  <div className="wrapper">
    <nav className="lil-nav">
    {navImages}
    </nav>
    <div className="gallery">
      {galleryImages}
    </div>
  </div>
  )
}
