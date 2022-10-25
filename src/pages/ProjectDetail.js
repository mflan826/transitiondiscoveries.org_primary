import React, { useState, useEffect } from "react";
import { getStyle } from "./../helper";
import { getProjectsImage } from "./../helper";
import Banner from "./../components/common/Banner";
import Testimonials from "../components/common/Testimonials";
import ProjectLeftBar from "../components/Projects/ProjectLeftBar";
import ProjectLeftImageRightBullets from "../components/Projects/ProjectLeftImageRightBullets";
import ImageAndDescriptionRow2 from "../components/AboutUs/ImageAndDescriptionRow2";
import IconTile2Heading from "../components/subindicators/IconTile2Heading";
import IconTile2 from "./../components/subindicators/IconTile2";
import "./ProjectDetail.css";

import GetConnectedImageRightTextLeft from "../components/GetConnected/GetConnectedImageRightTextLeft";

const mt_4 = {
  "margin-top": "4rem",
};

const ProjectDetail = ({ match }) => {
  let params = match.params;
  const [data, setData] = useState({});

  const projectDetailJsonUrl =
    process.env.REACT_APP_URL +
    "/projects/" +
    params.slug +
    "/" +
    params.slug +
    ".json";
  useEffect(() => {
    fetch(projectDetailJsonUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        alert(
          "Loading get projectDetail js data failed" +
            error +
            ", get projectDetail url" +
            projectDetailJsonUrl
        );
      });
  }, [projectDetailJsonUrl]);
  if (!data.Banner) {
    return null;
  }

  const link = { url: "", text: "Get in Touch" };
  return (
    <div className="main projectDetal " id="projectDetail">
      <section
        id={data.Banner.projectID}
        className="hero-equal-height pt-165 pb-150 gradient-overly-right-light  pagebanner"
        style={getStyle("Projects", data.Banner.imageName)}
      >
        <Banner
          breadcrumbLink={data.Banner.breadcrumbLink}
          heading={data.Banner.heading}
          text={data.Banner.text}
        />
      </section>
      <div className="container">
        <div class="row  ptb-40">
          <ProjectLeftBar
            sectionHeading="Our Projects"
            heading={data.ProjectLeftBar.heading}
            CtaHead={data.ProjectLeftBar.CtaHead}
            CtaLinkText={data.ProjectLeftBar.CtaLinkText}
            CtaLinkHref={data.ProjectLeftBar.CtaLinkHref}
            Leftmenu={data.ProjectLeftBar.Leftmenu}
          ></ProjectLeftBar>
          <main class="col-lg-9 py-3">
            <div class="">
              <section>
                <div className="container contentsec-grid2 ">
                  <ImageAndDescriptionRow2
                    imageName={getProjectsImage(data.first_section.imageName)}
                    heading={data.first_section.heading}
                    content={data.first_section.content}
                  />
                </div>
              </section>

              <section>
                <div className="container bgboxgrid purpbg">
                  <IconTile2Heading
                    heading={data.second_section.heading}
                    headingclassName="green"
                    subheadingclassName="dark"
                    subheading={data.second_section.subheading}
                  ></IconTile2Heading>
                  <div className="box-grid-icons">
                    {data.second_section.points.map((point, index) => (
                      <div className="box-grid-icons-1" align="center">
                        <IconTile2
                          iconHeadingclassName="dark"
                          iconTextclassName="dark"
                          iconTileImage={getProjectsImage(point.image)}
                          heading={point.heading}
                          content={point.description}
                          description = {"Goal" + index}
                        ></IconTile2>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <section className="purpose">
                <ProjectLeftImageRightBullets
                  heading={data.third_section.heading}
                  subheading={data.third_section.subheading}
                  LeftImg={getProjectsImage(data.third_section.LeftImg)}
                  content={data.third_section.content}
                ></ProjectLeftImageRightBullets>
              </section>
              <section className="ptb-60">
                <div className="container">
                  <div className="row">
                    {/* <div className=" col-lg-5">
                      <iframe
                        id="player"
                        type="text/html"
                        width="100%"
                        height="400"
                        src={data.fourth_section.video_url}
                        frameborder="0"
                      ></iframe>
                    </div> */}

                    <div className="col-lg-12">
                      <Testimonials
                        testimonials={data.fourth_section.testimonialList}
                      />
                    </div>

                    <div
                      style={mt_4}
                      className="container bgboxgrid2 purpbg"
                      id={data.fifth_section.projectID}
                    >
                      <IconTile2Heading
                        heading={data.fifth_section.heading}
                        subheading={data.fifth_section.subheading}
                        headingclassName="green"
                      ></IconTile2Heading>
                      <div className="box-grid-icons">
                        {data.fifth_section.points.map((point,index) => (
                          <div
                            className="box-grid-icons-1 advisory"
                            align="center"
                          >
                            <IconTile2
                              iconHeadingclassName="dark"
                              iconTextclassName="green"
                              iconTileImage={getProjectsImage(point.image)}
                              heading={point.heading}
                              content={point.description}
                              description={'advisory Board' + index}
                            ></IconTile2>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
