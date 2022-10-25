import React , { useState, useEffect } from "react";
import { getHomeImage } from "./../../helper";
import ReactHtmlParser from "react-html-parser";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import $ from 'jquery'

import { getImage } from "./../../helper";

const options = {
  loop: true,
  items: 1,
  nav: true,
  autoplayHoverPause: true,
  autoplay: true,
  dots: true,
  animateOut: "slideOutUp",
  animateIn: "slideInUp",
};



const TDHomeBanners = (props) => {
  
useEffect(() => {
  setTimeout(()=>{ 
    $('.owl-carousel').each(function() {
      //Find each set of dots in this carousel
    $(this).find('.owl-dot').each(function(index) {
      //Add one to index so it starts from 1
      $(this).attr('aria-label', index + 1);
      $(this).attr('title', 'UP button');
    });
  });},500);
 
}, []); 

  return (
    <div>
      <OwlCarousel className="owl-theme owl-carousel" margin={10} {...options}>
        {props.HomeSlider.map((item) => {
          return (
            <div class="item">
              <img src={getHomeImage(item.image)} alt="Blank Alt Tag" ></img>
              <div class="hero-slider-content text-center">
                <h1 class="home-headingtxt ">{item.title}</h1>
                <h2 class="home-subtxt white">
                  {ReactHtmlParser(item.description)}
                </h2>
              </div>
            </div>
          );
        })}
      </OwlCarousel>
    </div>
  );
};

export default TDHomeBanners;
