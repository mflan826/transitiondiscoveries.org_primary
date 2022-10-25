import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ModalBox from "./../common/ModalBox";
import { getHomeImage, getPageVideoUrl } from "./../../helper";
import { ResponsiveContainer } from "recharts";

const options = {
  loop: true,
  items: 2,
  nav: true,
  autoplayHoverPause: true,
  autoplay: true,
  dots: true,
  animateOut: "slideOutUp",
  animateIn: "slideInUp",
};

const font={
  'font-size':'1.75rem'
}

const TDHomeVideos = (props) => {
 
  const [resourceArtifact, setResourceArtifact] = useState({
    title: "",
    link: "",
    
  });

  const handleResourceClick = (resource) => (event) => {
    console.log('resource Type',resource);
    if (
      typeof resource.videoUrl === "undefined" ||
      Object.keys(resource.videoUrl).length === 0
    ) {
      event.preventDefault();
      return;
    }
    setResourceArtifact({
      title: "",
      link:  resource.videoUrl,
      type:resource.type
    });
  };
  return (
    <div>
      {" "}
      <div class="" align="center">
       <div>     
         <strong class="green" style={font}>
            {props.Heading}
         </strong>
        </div>
        <p class="sub-txt mb-3">{props.subheading}</p>
      </div>
      <OwlCarousel
        className="owl-theme owl-carousel OwlHomeVideos"
        margin={10}
        {...options}
      >
        {props.boxes.map((item,i) => {
          return (
            <div>
              <a
                href="#"
                data-toggle="modal"
                data-target="#modalResources"
                onClick={handleResourceClick(item)}
              >
                <div class="item">
                  <div className="IconTitle">
                    <img 
                      src={getHomeImage("playbutton2.png")}
                      class="icon-vide"
                      alt="About Transition Discoveries Alternative"
                    ></img>
                    <p>{item.heading}</p>
                  </div>
                  <div className="VideoThumb">
                    <img src={getHomeImage(item.image)} alt={'Play Video'+i}></img>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </OwlCarousel>
      <ModalBox
        id="modalResources"
        link={resourceArtifact.link}
        title=""
        type={resourceArtifact.type}
      ></ModalBox>
    </div>
  );
};

export default TDHomeVideos;
