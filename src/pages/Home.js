import React, { useState, useEffect } from "react";
import "./home.css";
import GetConnectedImageLeftTextRight from "../components/GetConnected/GetConnectedImageLeftTextRight";
import TDHomeVideos from "../components/Home/TDHomeVideos";
import TDHomeBanners from "../components/Home/TDHomeBanners";
import HomegetInvolved from "../components/Home/HomegetInvolved";
import { getHomeImage } from "./../helper";
import FAQList from "../components/FAQs/FAQList";
import HomePageGraphics from "../components/Home/HomePageGraphic";
import HomePageCaptionSection from "../components/Home/HomePageCaptionSection";
import HomeTDGuide from "../components/Home/HomeTDGuide";
import HomeCurrentlyHappening from "../components/Home/HomeCurrentlyHappening";
const HomePageJsonUrl = process.env.REACT_APP_URL + "/Home/HomePage.json";

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(HomePageJsonUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        alert(
          "Loading home js data failed" + error + ", home url" + HomePageJsonUrl
        );
      });
  }, []);
  if (!data.HomeSlider) {
    return null;
  }
  return (
    <div>
      <section class="hero-equal-height gradient-overly-right-light homebanner">
        <TDHomeBanners HomeSlider={data.HomeSlider}></TDHomeBanners>
      </section>
      <section class="homesection2">
        <GetConnectedImageLeftTextRight
          heading={data.GetConnectedImageLeftTextRight.heading}
          subheading={data.GetConnectedImageLeftTextRight.subheading}
          content={data.GetConnectedImageLeftTextRight.content}
          imageName={getHomeImage(
            data.GetConnectedImageLeftTextRight.imageName
          )}
          link={data.GetConnectedImageLeftTextRight.link}
        ></GetConnectedImageLeftTextRight>
      </section>
      <section className="TDHomeVideos ptb-40">
        <div className="container">
          <TDHomeVideos
            Heading={data.TDHomeVideos.Heading}
            subheading={data.TDHomeVideos.subheading}
            boxes={data.TDHomeVideos.boxes}
          ></TDHomeVideos>
        </div>
      </section>
      <section class="homesection7">
        <HomeTDGuide
          LeftHeading={data.HomeTDGuide.LeftHeading}
          RightHeading={data.HomeTDGuide.RightHeading}
          FaqRightImage={data.HomeTDGuide.FaqRightImage}
          EnglishGuidePDFLink={data.HomeTDGuide.EnglishGuidePDFLink}
          SpanishGuidePDFLink={data.HomeTDGuide.SpanishGuidePDFLink}
          faqList={data.HomeTDGuide.faqList}
        ></HomeTDGuide>
      </section>
      <section class="homesection3">
        <HomePageGraphics
          Heading={data.HomePageGraphics.Heading}
          CTAText={data.HomePageGraphics.link.text}
          CTALink={data.HomePageGraphics.link.url}
          RightImage={getHomeImage(data.HomePageGraphics.RightImage)}
        ></HomePageGraphics>
      </section>

      <section className="mt-150 homesection4">
        <HomegetInvolved
          Heading={data.HomegetInvolved.Heading}
          subheading={data.HomegetInvolved.subheading}
          boxes={data.HomegetInvolved.boxes}
        ></HomegetInvolved>
      </section>
      

      <section class="homesection6">
        <HomePageCaptionSection
          LeftHeading={data.HomePageCaptionSection.LeftHeading}
          LeftCta={data.HomePageCaptionSection.LeftCta}
          LeftCTALink={data.HomePageCaptionSection.LeftCTALink}
          RightHeading={data.HomePageCaptionSection.RightHeading}
          RightVideoLink={data.HomePageCaptionSection.RightVideoLink}
        ></HomePageCaptionSection>
      </section>

     

      <section class="homesection8">
        <HomeCurrentlyHappening
          Heading={data.HomeCurrentlyHappening.Heading}
          subheading={data.HomeCurrentlyHappening.subheading}
          boxes={data.HomeCurrentlyHappening.boxes}
        ></HomeCurrentlyHappening>
      </section>
    </div>
  );
};

export default Home;
