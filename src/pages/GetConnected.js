import React, { useState, useEffect } from "react";
import Banner from "./../components/common/Banner";
import { getImage } from "./../helper";
import GetConnectedImageLeftTextRight from "../components/GetConnected/GetConnectedImageLeftTextRight";
import GetConnectedImageRightTextLeft from "../components/GetConnected/GetConnectedImageRightTextLeft";
import GetConnectedFormSection from "../components/GetConnected/GetConnectedFormSection";
import "./GetConnected.css";
import { getStyle } from "./../helper";
import Testimonials from "../components/common/Testimonials";
const getConnectedJsonUrl =
  process.env.REACT_APP_URL + "/getconnected/getconnectedpage.json";
const GetConnected = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(getConnectedJsonUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        alert(
          "Loading get connected js data failed" +
            error +
            ", get connected url" +
            getConnectedJsonUrl
        );
      });
  }, []);
  console.log(data);
  if (!data.banner) {
    return null;
  }
  return (
    <div className="main" id="GetConnectedPage">
      <section >
      <div
          className="hero-equal-height pt-165 pb-150 gradient-overly-right-light  pagebanner"
          page="aboutus"
          style={getStyle("get-connected", data.banner.imageName)}
        >
        <Banner
          breadcrumbLink="Contact Us"
          heading={data.banner.heading}
          text={data.banner.text}
        />
        </div>
      </section>
      <section>
        <GetConnectedImageLeftTextRight
          heading={data.first_section.heading}
          subheading={data.first_section.subheading}
          content={data.first_section.content}
          imageName={getImage(data.first_section.imageName)}
          linkHref={data.first_section.linkHref}
          linkText={data.first_section.linkText}
        ></GetConnectedImageLeftTextRight>
      </section>
      <section>
        <GetConnectedImageRightTextLeft
          heading={data.second_section.heading}
          subheading={data.second_section.subheading}
          content={data.second_section.content}
          linkHref={data.second_section.linkHref}
          linkText={data.second_section.linkText}
          imageName={getImage(data.second_section.imageName)}
        ></GetConnectedImageRightTextLeft>
      </section>
      <section>
        <GetConnectedImageLeftTextRight
          heading={data.third_section.heading}
          subheading={data.third_section.subheading}
          content={data.third_section.content}
          linkHref={data.third_section.linkHref}
          linkText={data.third_section.linkText}
          imageName={getImage(data.third_section.imageName)}
        ></GetConnectedImageLeftTextRight>
      </section>
      <section>
        <GetConnectedFormSection
          formheading={data.form_section.formheading}
          formsubheading={data.form_section.formsubheading}
          imageName={getImage(data.form_section.imageName)}
          stepsheading={data.form_section.stepsheading}
          stepssubheading={data.form_section.stepssubheading}
        ></GetConnectedFormSection>
      </section>
      <section className="ptb-60">
        <div className="container">
          <div className="row">
            <div className=" col-lg-5 col-md-5">
              <iframe className="gcplayer"
                id="player"
                type="text/html"
                width="100%"
                height="500"
                src={data.fourth_section.video_url}
                frameborder="0"
              ></iframe>
            </div>
            <div className="col-lg-7">
              <Testimonials
                testimonials={data.fourth_section.testimonialList}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetConnected;
