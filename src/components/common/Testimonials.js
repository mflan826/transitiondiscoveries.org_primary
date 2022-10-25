import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReactHtmlParser from 'react-html-parser';
import $ from 'jquery';
import { getImage } from './../../helper';

const options = {
  loop: true,
  items: 1,
  nav: false,
  autoplayHoverPause: true,
  autoplay: true,
  video: true,
  slideBy: 1,
  responsive: {
    2000: {
      items: 1,
    },
  },
};

const font = {
  'font-size': '1.75rem',
};

const Testimonials = (props) => {
  useEffect(() => {
    setTimeout(() => {
      $('.owl-carousel').each(function () {
        //Find each set of dots in this carousel
        $(this)
          .find('.owl-dot')
          .each(function (index) {
            //Add one to index so it starts from 1
            $(this).attr('aria-label', index + 1);
            $(this).attr('title', 'UP button');
          });
      });
    }, 500);
  }, []);

  return (
    <div>
      <OwlCarousel className="owl-theme owl-carousel" margin={10} {...options}>
        {(props.testimonials || []).map((testimonial) => (
          <div class="item">
            <img
              className="quote-icon"
              src={getImage('quote-icon.png')}
              alt=""
            ></img>
            <p>{ReactHtmlParser(testimonial.description)}</p>
            <div style={font} className="greencolor">
              {testimonial.title}
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Testimonials;
