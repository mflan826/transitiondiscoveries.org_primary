import React, { useState, useEffect } from "react";
import { Tab, Nav, Image } from "react-bootstrap";
import { getPageImage, getPageVideoUrl } from "./../helper";
import ReactHtmlParser from "react-html-parser";
import Banner from "../components/common/Banner";
import ImageBtnLink from "../components/AboutUs/ImageBtnLink";
import ImageLinkTile from "../components/AboutUs/ImageLinkTile";
import ImageAndDescriptionRow from "../components/ContactUs/ImageAndDescriptionRow";
import ImageAndDescriptionRow2 from "../components/AboutUs/ImageAndDescriptionRow2";
import "./AboutUs.css";
import VideoBoxwithBG from "../components/AboutUs/VideoBoxwithBG";
import FooterTop from "../components/common/FooterTop";
import { getStyle } from "./../helper";

const AboutUs = () => {
  const [data, setData] = useState({});

  const font = {
    "font-size": "1.75rem",
  };

  const aboutusJsonUrl = process.env.REACT_APP_URL + "/aboutus/aboutus.json";
  useEffect(() => {
    fetch(aboutusJsonUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        alert(
          "Loading get aboutus js data failed" +
            error +
            ", get aboutus url" +
            aboutusJsonUrl
        );
      });
  }, []);
  if (!data.Banner) {
    return null;
  }

  return (
    <div className="main" id="aboutpage">
      <section>
        <div
          className="hero-equal-height pt-165 pb-150 gradient-overly-right-light aboutbanner pagebanner"
          page="aboutus"
          style={getStyle("aboutus", data.Banner.imageName)}
        >
          <Banner
            breadcrunmbLink={data.Banner.breadcrunmbLink}
            heading={data.Banner.heading}
            text={data.Banner.text}
          ></Banner>
        </div>
      </section>
      <section>
        <div className="container contentsec-grid ptb-40">
          <ImageAndDescriptionRow2
            page="aboutus"
            imageName={getPageImage(
              "aboutus",
              data.ImageAndDescriptionRow2.imageName
            )}
            className="img-responsive"
            heading={data.ImageAndDescriptionRow2.heading}
            content={data.ImageAndDescriptionRow2.content}
            descriptionLink={data.ImageAndDescriptionRow2.descriptionLink}
          />
        </div>
      </section>

      <section className="ptb-40">
        <VideoBoxwithBG
          LeftHeading={data.VideoBoxwithBG.heading}
          CTALink={data.VideoBoxwithBG.CTALink}
          VideoLink={data.VideoBoxwithBG.VideoLink}
        ></VideoBoxwithBG>
      </section>
      <section>
        <div className="container tab-grid ptb-40">
          <div className="item-a">
            <Image
              src={getPageImage("aboutus", data.third_section.leftImage)}
              fluid
              alt="TD Vision Mission History and Partners"
              style={{}}
            />{" "}
          </div>
          <div className="item-b">
            <Tab.Container defaultActiveKey="first">
              <div className="item-tabhead">
                <div className="item-tabhead1"></div>
                <div className="item-tabhead2">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item className="my-2">
                      <Nav.Link eventKey="first" className="green-btn">
                        {data.third_section.tabs[0].heading}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="my-2">
                      <Nav.Link eventKey="second" className="green-btn">
                        {data.third_section.tabs[1].heading}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="my-2">
                      <Nav.Link eventKey="third" className="green-btn">
                        {data.third_section.tabs[2].heading}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="my-2">
                      <Nav.Link eventKey="fourth" className="green-btn">
                        {data.third_section.tabs[3].heading}
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
              <div className="item-tabcont">
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div>
                      <div className="green" style={font}>
                        {data.third_section.tabs[0].heading}
                      </div>
                      {ReactHtmlParser(data.third_section.tabs[0].text)}
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="green" style={font}>
                      {data.third_section.tabs[1].heading}
                    </div>
                    {ReactHtmlParser(data.third_section.tabs[1].text)}
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div className="green" style={font}>
                      {data.third_section.tabs[2].heading}
                    </div>
                    {ReactHtmlParser(data.third_section.tabs[2].text)}
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <div className="green" style={font}>
                      {data.third_section.tabs[3].heading}
                    </div>
                    {ReactHtmlParser(data.third_section.tabs[3].text)}
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </Tab.Container>
          </div>
        </div>
      </section>

      <section>
        <div className="container grid ptb-40">
          <ImageAndDescriptionRow
            imageName={data.ImageAndDescriptionRow.imageName}
            descriptionIconImageName={data.ImageAndDescriptionRow.leftIcon}
            content={data.ImageAndDescriptionRow.content}
          />
        </div>
      </section>
      {/* <section>
        <div className="container involvmnt-grid">
          {data.fifth_section.ImageLinkTile.map((item) => {
            return (
              <ImageLinkTile imageName={item.imageName} link={item.link} />
            );
          })}
        </div>
      </section> */}
      <section>
        <div className="container aboutlast-grid ptb-40">
          {data.sixth_section.ImageBtnLink.map((item, index) => {
            return (
              <ImageBtnLink
                imageName={item.imageName}
                link={item.link}
                heading={item.heading}
                index={index}
              />
            );
          })}
        </div>
      </section>
      <section className="ptb-60">
        <FooterTop></FooterTop>
      </section>
    </div>
  );
};

export default AboutUs;
