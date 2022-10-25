import React, { useState, useEffect } from 'react';
import { getTeamImage } from './../helper';
import Banner from '../components/common/Banner';
import TeamMembers from './../components/Team/TeamMembers';
import ImageAndDescriptionRow from './../components/ContactUs/ImageAndDescriptionRow';
import PartnersList from '../components/Projects/PartnersList';
import BecomePartner from '../components/Projects/BecomePartner';
import './Team.css';
import { getStyle } from './../helper';

const teamJsonUrl =
  process.env.REACT_APP_URL + '/contributors/contributors.json';

const Team = () => {
  const descLink = { url: '', text: 'Join Now' };
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(teamJsonUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        alert(
          'Loading team js data failed' + error + ', team url' + teamJsonUrl
        );
      });
  }, []);
  console.log(data);
  if (!data.Banner) {
    return null;
  }

  return (
    <div className="main" id="contributepage">
      <section>
        <div
          className="hero-equal-height pt-165 pb-150 gradient-overly-right-light pagebanner"
          page="contributors"
          style={getStyle('contributors', data.Banner.image)}
        >
          <Banner
            heading={data.Banner.heading}
            text={data.Banner.text}
            // link={data.Banner.link}
          ></Banner>
        </div>
      </section>
      <section className="TeamMembers">
        <TeamMembers
          TeamMembers={data.TeamMembers}
          Contributors={true}
        ></TeamMembers>
      </section>
      {/* <section className="green-text-box">
        <div className="container grid-dark ptb-40">
          <ImageAndDescriptionRow
            imageName={data.ImageAndDescriptionRow.imageName}
            isImageSideRight={true}
            heading={data.ImageAndDescriptionRow.heading}
            content={data.ImageAndDescriptionRow.content}
            descriptionLink={data.ImageAndDescriptionRow.link}
          ></ImageAndDescriptionRow>
        </div>
      </section>
      <section className="PartnersSection">
        <div className="container">
          <div className="PartnersType">
            <PartnersList
              heading={data.PartnersList.heading}
              subheading={data.PartnersList.subheading}
              PartnersLeftBoxImg={getTeamImage(
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
              </section>*/}
      <section className="BecomePartnerSection">
        <BecomePartner
          BecomePartnerLeft={getTeamImage(data.BecomePartner.BecomePartnerLeft)}
          JoinUsText={data.BecomePartner.JoinUsText}
          ProjectLinkText={data.BecomePartner.ProjectLinkText}
          ProjectLink1={data.BecomePartner.ProjectLink1}
        ></BecomePartner>
      </section>
    </div>
  );
};

export default Team;
