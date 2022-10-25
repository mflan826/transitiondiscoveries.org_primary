import React, { useState, useEffect } from "react";
import Banner from "../components/common/Banner";
import { getPartnersImage } from "./../helper";
import ProjectsListContentImg from "../components/Projects/ProjectsListContentImg";
import PartnersList from "../components/Projects/PartnersList";
import BecomePartner from "../components/Projects/BecomePartner";
import { getStyle } from "./../helper";

const Partners = () => {
  const [data, setData] = useState({});

  const partnersJsonUrl = process.env.REACT_APP_URL + "/partners/partners.json";
  useEffect(() => {
    fetch(partnersJsonUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        alert(
          "Loading get partners js data failed" +
            error +
            ", get partners url" +
            partnersJsonUrl
        );
      });
  }, []);
  if (!data.Banner) {
    return null;
  }
  return (
    <div className="main" id="partnerPage">
      <section >
      <div
          className="hero-equal-height pt-165 pb-150 gradient-overly-right-light pagebanner"
          page="partners"
          style={getStyle("partners", data.Banner.imageName)}
        >
        <Banner
          breadcrunmbLink="Partners"
          heading={data.Banner.heading}
        ></Banner>
        </div>
      </section>
      {(data.Partners || []).map((item) => {
        return (
          <section className="ProjectslistContentImg">
            <ProjectsListContentImg
              heading={item.heading}
              link={item.link}
              content={item.content}
              RightImg={getPartnersImage(item.RightImg)}
            ></ProjectsListContentImg>
          </section>
        );
      })}

      <section className="PartnersSection">
        <div className="container">
          <div className="PartnersType">
            <PartnersList
              heading={data.PartnersList.heading}
              subheading={data.PartnersList.subheading}
              PartnersLeftBoxImg={getPartnersImage(
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
          BecomePartnerLeft={getPartnersImage(
            data.BecomePartner.BecomePartnerLeft
          )}
          Subheading={data.BecomePartner.Subheading}
          JoinUsText={data.BecomePartner.JoinUsText}
          ProjectLinkText={data.BecomePartner.ProjectLinkText}
          ProjectLink1={data.BecomePartner.ProjectLink1}
        ></BecomePartner>
      </section>
    </div>
  );
};

export default Partners;
