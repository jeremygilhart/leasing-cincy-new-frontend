import React from "react"

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


export default function PhotoGallery() {
  return (
      <div class="photo-gallery">
          <h1 class="orange">Photo Gallery</h1>
          <div class = "photo-gallery-photos">
            <div class = "photo-gallery-photo photo-1" > <img src={idaAve1} alt="property photo" /></div>
            <div class = "photo-gallery-photo photo-2" > <img src={idaAve2} alt="Map of norwood." /></div>
            <div class = "photo-gallery-photo photo-3" > <img src={idaAve3} alt="property photo" /></div>
            <div class = "photo-gallery-photo photo-4" > <img src={idaAve4} alt="Map of norwood." /></div>
            <div class = "photo-gallery-photo photo-5" > <img src={idaAve5} alt="property photo" /></div>
            <div class = "photo-gallery-photo photo-6" > <img src={idaAve6} alt="property photo" /></div>
            <div class = "photo-gallery-photo photo-7" > <img src={idaAve7} alt="Map of norwood." /></div>
            <div class = "photo-gallery-photo photo-8" > <img src={idaAve8} alt="property photo" /></div>
            <div class = "photo-gallery-photo photo-9" > <img src={idaAve9} alt="Map of norwood." /></div>
            <div class = "photo-gallery-photo photo-10"> <img  src={idaAve10} alt="property photo" /></div>
            <div class = "photo-gallery-photo photo-11"> <img  src={idaAve1} alt="property photo" /></div>
            <div class = "photo-gallery-photo photo-12"> <img  src={idaAve2} alt="Map of norwood." /></div>
            <div class = "photo-gallery-photo photo-13"> <img  src={idaAve3} alt="property photo" /></div>
            <div class = "photo-gallery-photo photo-14"> <img  src={idaAve4} alt="Map of norwood." /></div>
            <div class = "photo-gallery-photo photo-15"> <img  src={idaAve5} alt="property photo" /></div>
            <div class = "photo-gallery-photo photo-16"> <img  src={idaAve6} alt="property photo" /></div>
            <div class = "photo-gallery-photo photo-17"> <img  src={idaAve7} alt="Map of norwood." /></div>
            <div class = "photo-gallery-photo photo-18"> <img  src={idaAve8} alt="property photo" /></div>
            <div class = "photo-gallery-photo photo-19"> <img  src={idaAve9} alt="Map of norwood." /></div>
            <div class = "photo-gallery-photo photo-20"> <img  src={idaAve10} alt="property photo" /></div>
            <div class = "photo-gallery-photo photo-21"> <img  src={idaAve1} alt="Map of norwood." /></div>
          </div>
        </div>

    );
}