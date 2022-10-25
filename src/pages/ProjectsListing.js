import React, { useState, useEffect } from "react";
import { getImage } from "./../helper";
import Banner from "./../components/common/Banner";

import ProjectsListContentImg from "../components/Projects/ProjectsListContentImg";
import ProjectLeftImageRightBullets from "../components/Projects/ProjectLeftImageRightBullets";
import ProjectsList from "../components/Projects/ProjectsList";
import PartnersList from "../components/Projects/PartnersList";
import BecomePartner from "../components/Projects/BecomePartner";
import "./ProjectsListing.css";

const projectListJsonUrl =
  process.env.REACT_APP_URL + "/projects/ProjectsList.json";

const ProjectsListing = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(projectListJsonUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        alert(
          "Loading get projectList js data failed" +
            error +
            ", get projectList url" +
            projectListJsonUrl
        );
      });
  }, []);
  if (!data.Banner) {
    return null;
  }
  return (
    <div className="main">
      <section className="hero-equal-height pt-165 pb-100 gradient-overly-right-light projectbanner">
        <Banner
          breadcrumbLink={data.Banner.breadcrumbLink}
          heading={data.Banner.heading}
          text={data.Banner.text}
        />
      </section>
      <section className="ProjectslistContentImg ptb-40">
        <ProjectsListContentImg
          heading={data.ProjectsListContentImg.heading}
          subhead={data.ProjectsListContentImg.subhead}
          content={data.ProjectsListContentImg.content}
          RightImg={getImage(data.ProjectsListContentImg.RightImg)}
        ></ProjectsListContentImg>
      </section>
      <section className="ProjectsListLeftImgRightBullets ptb40">
        <ProjectLeftImageRightBullets
          heading={data.ProjectLeftImageRightBullets.heading}
          subheading={data.ProjectLeftImageRightBullets.subheading}
          content={data.ProjectLeftImageRightBullets.content}
          LeftImg={getImage(data.ProjectLeftImageRightBullets.LeftImg)}
        ></ProjectLeftImageRightBullets>
      </section>

      <section className="ProjectsList">
        <ProjectsList
          heading={data.ProjectsList.heading}
          subheading={data.ProjectsList.subheading}
          Projects={data.ProjectsList.Projects}
        ></ProjectsList>
      </section>
      <section className="PartnersSection">
        <div className="container">
          <div className="PartnersType">
            <PartnersList
              heading={data.PartnersList.heading}
              subheading={data.PartnersList.subheading}
              PartnersLeftBoxImg={getImage(
                data.PartnersList.PartnersLeftBoxImg
              )}
              LeftBoxDesc={data.PartnersList.LeftBoxDesc}
              TabTitle1={data.PartnersList.TabTitle1}
              Tabdata1={data.PartnersList.Tabdata1}
              TabTitle2={data.PartnersList.TabTitle2}
              Tabdata2={data.PartnersList.Tabdata2}
            ></PartnersList>
          </div>
        </div>
      </section>
      <section className="BecomePartnerSection">
        <BecomePartner
          BecomePartnerLeft={getImage(data.BecomePartner.BecomePartnerLeft)}
          JoinUsText={data.BecomePartner.JoinUsText}
          ProjectLinkText={data.BecomePartner.ProjectLinkText}
          ProjectLink1={data.BecomePartner.ProjectLink1}
        ></BecomePartner>
      </section>
    </div>
  );
};

export default ProjectsListing;
