import React, { useState, useEffect } from 'react';
import Banner from './../components/common/Banner';
import { getFAQsImage } from './../helper';
import IconTile from './../components/common/IconTile';

import './faqs.css';
import FAQList from '../components/FAQs/FAQList';
import Header from '../components/common/Header';

const faqPageJsonUrl = process.env.REACT_APP_URL + '/faq/faqPage.json';

const FAQs = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(faqPageJsonUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        alert(
          'Loading faq js data failed' + error + ', faq url' + faqPageJsonUrl
        );
      });
  }, []);

  const link = { url: '/get-connected', text: 'Get in Touch' };
  if (!data.banner) {
    return null;
  }

  return (
    <div className="main">
      <section className="hero-equal-height   bg-darkgreen">
        <Banner
          breadcrumbLink="FAQs"
          heading={data.banner.heading}
          text={data.banner.text}
          imageName={getFAQsImage('faq-banner-right.png')}
        ></Banner>
      </section>
      <section className="ptb-60">
        <div className="container FAQs">
          <div className="faq-list">
            <FAQList faqs={data.faqList}></FAQList>
          </div>
          <div className="faq-right">
            <img
              src={getFAQsImage('faq-right.png')}
              className="img-fluid"
              alt="Having any Question"
            ></img>
            <div className="faq-right-box">
              {' '}
              <IconTile
                iconTileImage="faq-right-icon.png"
                heading="How can I get connected to Transition Discoveries? "
                content="Tell us how you’d like to get involved to make sure you, or a young person you know is living their best life! There are so many ways to get connected! "
                className=""
                link={link}
                className="FAQrightCTA"
              ></IconTile>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
