import React, { useState, useEffect } from 'react';
import { getTeamImage } from './../helper';
import Banner from '../components/common/Banner';
import TeamMembers from './../components/Team/TeamMembers';
import ImageAndDescriptionRow from './../components/ContactUs/ImageAndDescriptionRow';
import PartnersList from '../components/Projects/PartnersList';
import BecomePartner from '../components/Projects/BecomePartner';
import './Team.css';
const teamJsonUrl = process.env.REACT_APP_URL + '/team/team.json';

const Team = () => {
  const descLink = { url: '', text: 'Join Now' };
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(process.env.REACT_APP_S3_URL + 'team/team.json').then((response) => {
      response
        .json()
        .then((data) => {  
          if(data.TeamMembers.Team.length > 0){
            console.log('data.TeamMembers.Team', data.TeamMembers.Team)
            localStorage.setItem('team', JSON.stringify(data.TeamMembers.Team))
          }
          setData(data);
        })
        .catch((error) => {
          alert(
            'Loading team js data failed' + error + ', team url' + teamJsonUrl
          );
        });
    });
  }, []);
  console.log(data);
  if (!data.Banner) {
    return null;
  }

  return (
    <div className="main" id="team-box">
      <section
        className="hero-equal-height  pb-150 gradient-overly-right-light TeamBanner"
        id="TeamListPage"
      >
        <Banner
          heading={data.Banner.heading}
          text={data.Banner.text}
          link={data.Banner.link}
          imageName={getTeamImage(data.Banner.imageName)}
        ></Banner>
      </section>
      <section className="TeamMembers">
        <TeamMembers
          heading={data.TeamMembers.heading}
          subheading={data.TeamMembers.subheading}
          Team={data.TeamMembers.Team}
        ></TeamMembers>
      </section>
      <section className="green-text-box">
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
      </section>
      <section>
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
