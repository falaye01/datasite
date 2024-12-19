import React, { useState } from "react";
import Slider from "react-slick";
import "boxicons"
import 'boxicons/css/boxicons.min.css';
import "slick-carousel/slick/slick.css"; 
import './Feature.css'
import "slick-carousel/slick/slick-theme.css";
import AutomatedBank from "../AutomatedBank/AutomatedBank";

function Feature() {
  const [bank, setBank] = useState('moniepoint')

  const handleChangeBank = (changeBank)=>{
    setBank(changeBank)
  }
  const settings = {
    dots: false, 
    infinite: true, 
    speed: 1000, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    arrows: true, 
  };

  return (
    <>
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="image1">
         <div className="slider">
         <h1>FEATURED</h1>
          <h1>CONVERT YOUR AIRTIME TO CASH</h1>
          <p>convert your airtime to cash with us at Affordable rate</p>
         </div>
        </div>
        <div className="image2">
        <div className="slider">
         <h1>FEATURED</h1>
          <h1>CONVERT YOUR AIRTIME TO CASH</h1>
          <p>convert your airtime to cash with us at Affordable rate</p>
         </div>
        </div>
        <div className="image3">
        <div className="slider">
         <h1>FEATURED</h1>
          <h1>CONVERT YOUR AIRTIME TO CASH</h1>
          <p>Best Vtu Service</p>
         </div>
        </div>
      </Slider>
    </div>
    <div className="banks">
     
      <div className={`ctn ${bank=== "moniepoint"? "live" : ""}`} onClick={()=>handleChangeBank("moniepoint")} >
        <i className="bx bxs-credit-card"></i>
        <span>Moniepoint</span>
      </div>
      <div className={`ctn ${bank === "9psb"? "live" : ""}` } onClick={()=>handleChangeBank("9psb")}>
        <i className="bx bxs-credit-card"></i>
        <span>9Psb</span>
      </div>
      <div className={`ctn ${bank === "wema"? "live" : ""}` } onClick={()=>handleChangeBank("wema")}>
        <i className="bx bxs-credit-card"></i>
        <span>Wema</span>
      </div>
      <div className={`ctn ${bank === "Access"? "live" : ""}` } onClick={()=>handleChangeBank("Access")}>
        <i className="bx bxs-credit-card"></i>
        <span>Access</span>
      </div>
      <div className={`ctn ${bank === "Safe Haven"? "live" : ""}` } onClick={()=>handleChangeBank("Safe Haven")}>
        <i className="bx bxs-credit-card"></i>
        <span>Safe Heven</span>
      </div>

    </div>
    <AutomatedBank bank={bank} setBank={setBank} />
    </>
    
  );
}

export default Feature;
