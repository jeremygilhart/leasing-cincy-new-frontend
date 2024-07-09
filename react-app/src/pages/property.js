import React, {useRef} from "react"
import three_lines from "../three_lines.png"
import housefront from "../Housefront.png"
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

import NewCarousel from "./newCarousel"

import emailjs from "@emailjs/browser";

import './property.css';

function MainHomeView({house}) {
  return (
  <div className="House-section-property-page"  style={
        {backgroundImage: `url(${house["route"]}/${house["main photo"]})`}
      }>
    <div className="House-under-image-description">
    <div className="House-under-image-description-text-section">
      <div className="textGroupAlignLeft">
        <h2>{house["rent"]} / Month</h2>
        <h3>Available June 1st</h3>
      </div>
      <div className="textGroupAlignRight">
        <h2>{house["squarefeet"]}</h2>
        <h3>Squarefeet</h3>
      </div>
      <div className="textGroupAlignRight">
        <h2>{house["bathrooms"]}</h2>
        <h3>Bathrooms</h3>
      </div>
      <div className="textGroupAlignRight">
       <h2>{house["bedrooms"]}</h2>
       <h3>Bedrooms</h3>
      </div>
    </div>
  </div>
  </div>
  );
}

function GreatLocation({imageDirectory, greatLocationData, greatFeaturesIsVisible}) {
  if (greatLocationData["is visible"] == "True") {
    let threeLines = null;
    if (greatFeaturesIsVisible == "True") {
      threeLines = <img src={three_lines} class="three_lines" />
    }
      return (
        <div className="Great-location">
          <div className = "Gl-text-container">
            <h1>
              Great <span class="orange">Location</span>
            </h1>
            <img src={imageDirectory + "/" + greatLocationData["map image"]} alt="Map of norwood." />
            <p>{greatLocationData["map description"]}</p>
            {threeLines}
          </div>
        </div>
        );
     } else {
    return;
  }
}

function GreatFeatures({greatFeaturesData}) {

  let featuresList = [];
  for (let i = 0; i < greatFeaturesData["features list"].length; i++) {
    featuresList.push(<li>{greatFeaturesData["features list"][i]}</li>)
  }

  if (greatFeaturesData["is visible"] == "True") {
    return (
      <div className="Great-features">
        <h1>
          Great <span class="orange">Features</span>
        </h1>
          <div className = "Gf-text-container">
            <div className = "Left-text-column">
              <p>{greatFeaturesData["features description"]}</p>
            </div>

            <div className = "Right-text-column">
              <ul>
                {featuresList}
              </ul>
            </div>
          </div>
        </div>
      );
  } else {
    return;
  }
}

/*
function PhotoGallery({myState, changeMyState}) {
  return (
      <div class="photo-gallery">
          <h1 class="orange">Photo Gallery</h1>
          <div class = "photo-gallery-photos" onClick={() => changeMyState(1)}>
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
*/

function VirtualTour({virtualTourData}) {
  if (virtualTourData["is visible"] == "True") {
    return (
      <div className="virtual-tour">
        <h1>Virtual Tour</h1>
        <iframe width="853" height="480" src={virtualTourData["url"]} frameborder="0" allowFullScreen allow="xr-spatial-tracking"></iframe>
      </div>
      );
  } else {
    return (
      <div></div>)
  }
}

const Contact = () => {

  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    console.log(event.target[0].value)
    console.log(event.target[1].value)
    console.log(event.target[2].value)
    console.log(event.target[3].value)
    console.log(event.target[4].value)
    if (event.target[0].value == "" || event.target[1].value == "" || event.target[2].value == "" || event.target[3].value == "") {
      console.log("You left something blank!")

    } else {
    emailjs.sendForm("service_9c23tzb", "template_p3lizi7", form.current, "NXddaTHpdVUShlgQT")
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
            var successMessage = document.getElementById("hide-on-submit");
            successMessage.style.display = "none";
            var successMessage = document.getElementById("show-on-submit");
            successMessage.style.display = "";
        }, (error) => {
            console.log(error.text);
        });
      };
  }

  return  <form ref={form} onSubmit={sendEmail}>
            <label>
              <input type="text" name="user_name" placeholder="Full Name" />
            </label>
            <label>
              <input type="text" name="user_email" placeholder = "Email Address" />
            </label>
            <label>
              <input type="text" name="user_phone" placeholder = "Phone Number"/>
            </label>
            <label>
              <textarea name="message" placeholder = "Message"/>
            </label>
            <input name="submit" type="submit" value="Send" />
          </form>
}


function ContactUs() {
  return (
    <div className="contact-us">
      <div className = "small-red-line"></div>
      <div className = "big-orange-line">
        <h1>Interested? Schedule a tour today!</h1>
      </div>
      <div className = "small-red-line"></div>
      <div className="contact-us-main">
        <h1>Contact Us</h1>
        <div className = "form-div" id="hide-on-submit" style={{display: "",}}>
          <Contact />
        </div>
        <div id = "show-on-submit" style={{display: "none", color: "white"}}>
          <h2>Thank you for submitting!</h2>
        </div>
      </div>
    </div>
    );
}

/*
function Carousel({myState, changeMyState}) {
  // https://webdesign.tutsplus.com/how-to-build-a-simple-carousel-with-vanilla-javascript--cms-41734t 
  const closeButton = document.getElementById("slide-arrow-close");
  const prevButton = document.getElementById("slide-arrow-prev");
  const nextButton = document.getElementById("slide-arrow-next");
/*
 // nextButton.addEventListener("click", () => {
 //   const slideWidth = slide.clientWidth;
 //   slidesContainer.scrollLeft += slideWidth;
 // });
 // prevButton.addEventListener("click", () => {
 //   const slideWidth = slide.clientWidth;
 //   slidesContainer.scrollLeft -= slideWidth;
 // });

  

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

  function closeCarousel() {
    changeMyState()
  }


  return (
  <div className="carousel" myState={myState}>
    <div class="slider-wrapper">
      <div class="close-button-parent" >
        <button class="close-button" id="close-button"
      onClick={() => closeCarousel()}
      myState={myState}>
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
}*/


function Property({house}) {

  const [myState, setMyState] = React.useState("unopened");

  const changeMyState =  () => {
      console.log("You just clicked");
      if (myState !== "visible") {
        setMyState("visible");
      } else
          setMyState("hidden")
    };

  const turnOffGallery =  () => {
      console.log("Closing photo carousel.");
          setMyState("hidden")
          setTimeout(500)
          setMyState("unopened")

    };

  const turnOnGallery =  () => {
      console.log("Opening photo carousel");
        setMyState("visible")

    };



  return (
    <div className="Property">
      <title>{house["address"]}</title>

      <div className="Titlebar-offset"></div>
      {/*
      <Carousel 
      myState = {myState}
      changeMyState = {() => turnOffGallery()}
      />
      */}
      <MainHomeView house={house} />
      <GreatLocation imageDirectory={house["route"]} greatLocationData={house["great location"]} greatFeaturesIsVisible={house["great features"]["is visible"]} />
      <GreatFeatures greatFeaturesData={house["great features"]} />
      {/*
      <PhotoGallery 
      myState = {myState}
      changeMyState = {() => turnOnGallery()}/>
      */}
      <NewCarousel
      imageDirectory={house["route"]}
      images={house["all photos"]} />
      <VirtualTour virtualTourData={house["virtual tour"]} />
      <ContactUs />
    </div>
  );
}




export default Property;