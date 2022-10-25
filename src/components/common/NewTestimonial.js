import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import { Media, Player, controls } from 'react-media-player'
// const { PlayPause, MuteUnmute } = controls

import { getImage } from './../../helper';
import { getSubIndicatorAudioUrl } from './../../helper';
import $ from 'jquery';
// import { getString } from "./../../helper";
import ReactPlayer from 'react-player';
import styles from './NewTestimonial.css';

const options = {
  loop: false,
  s: 1,
  nav: false,
  autoplayHoverPause: true,
  autoplay: false,
  items: 1,
  dots:false,
  video: true,
  slideBy: 1,
  responsive: {
    2500: {
      items: 1,
    },
  },
};

const font = {
  'font-size': '1.75rem',
};

const display = {
  display: 'inline-block',
};

const NewTestimonial = (props) => {
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
          <div className="col-lg-12 " align="center">
            {testimonial.url ? (
              <div className="col-lg-5" style={display}>
                <ReactPlayer
                  controls="true"
                  preload="true"
                  width="300"
                  height="300"
                  className="player-wrapper "
                  url={
                    testimonial.audio
                      ? getSubIndicatorAudioUrl(
                          props.indicatorSlug,
                          props.subindicatorSlug,
                          testimonial.url
                        )
                      : testimonial.url
                  }
                />
              </div>
            ) : null}
            <div className="col-lg-7" style={display}>
              <img
                className="quote-icon"
                src={getImage('quote-icon.png')}
                alt=""
              ></img>
              <p>{testimonial.description}</p>
              <div style={font} className="greencolor">
                {testimonial.title}
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};
//8588864140
export default NewTestimonial;
