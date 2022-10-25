import React, { useState, useEffect } from 'react';
import Banner from './../components/common/Banner';
import IconTile from './../components/common/IconTile';
import ImageAndDescriptionRow from './../components/ContactUs/ImageAndDescriptionRow';
import ContactUsForm from './../components/ContactUsForm';
import { getImage } from '../helper';
import { getStyle } from './../helper';

const ContactUs = () => {
  const link = { url: '/get-connected', text: 'Join Now' };
  const link2 = { url: '/what-works', text: 'Start Survey' };
  const descLink = { url: '/get-connected', text: 'Join Now' };
  const bgImage = 'contact-banner.jpg';

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      process.env.REACT_APP_API_URL + 'api/managepages/contactus/page'
    ).then((response) => {
      response
        .json()
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          alert('Loading team js data failed' + error + ', team url');
        });
    });
  }, []);
  console.log(data);
  if (!data.BannerText) {
    return null;
  }

  return (
    <div className="main" id="contactus-box">
      <section>
        <div
          className="hero-equal-height pt-165 pb-150 gradient-overly-right-light  pagebanner"
          page="contactus"
          style={getStyle('contact', bgImage)}
        >
          <Banner
            breadcrumbLink="Contact Us"
            heading="Contact Us"
            text={data.BannerText}
          />
        </div>
      </section>

      <section className=" ptb-60">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-7" align="">
              <img
                src={getImage('contact-2.jpg')}
                className="img-responsive"
                alt="Contact Information"
              />
              <div className="col-md-12 col-lg-12" align="">
                <div className="row plan-bx2">
                  <div className="col-md-12 col-lg-5 p-10 ico1">
                    <IconTile
                      iconTileImage="contact-ico-1.png"
                      heading="Reach Us"
                      content={data.ReachUs}
                      className=""
                    ></IconTile>
                  </div>
                  <div className="col-md-12 col-lg-7 p-10 boxborder mt-mob10">
                    <IconTile
                      iconTileImage="contact-ico-2.png"
                      heading="Locate Us"
                      content={data.LocateUs}
                      
                      className=""
                    ></IconTile>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 plan-bx1">
              <ContactUsForm
                heading={data.FormHeading}
                title={data.FormSubHeading}
              ></ContactUsForm>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <iframe
            src={data.MapSource}
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </section>

      <section className="green-text-box">
        <div className="container grid-dark ptb-40">
          <ImageAndDescriptionRow
            imageName="contact-4.png"
            isImageSideRight={true}
            heading="Get Connected!"
            content="There are many ways to become involved in the Transition Discoveries Initiative.  Please check out ways to Get Connected"
            descriptionLink={descLink}
          ></ImageAndDescriptionRow>
        </div>
      </section>
      <section className="writen ptb-60">
        <div className="container">
          <div className="row greybg">
            <div className="col-md-4 col-lg-4 pad-0 mbtm-0">
              <img
                src={getImage('contact-5.png')}
                className="img-responsive"
                alt="Get Involved and Start Survey"
              ></img>
            </div>
            <div className="col-md-4 col-lg-4 ">
              <IconTile
                iconTileImage="contact-ico-3.png"
                heading="Get Involved"
                content="This collection is written to engage youth, families."
                link={link}
                className="iconTile"
              ></IconTile>
            </div>
            <div className="col-md-4 col-lg-4 ">
              <IconTile
                iconTileImage="contact-ico-4.png"
                heading="Start Survey"
                content="The purpose of this survey is to help us learn from you!"
                link={link2}
                className="iconTile"
              ></IconTile>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
