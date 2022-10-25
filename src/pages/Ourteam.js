import React, { useState, useEffect } from 'react';
import { getTeamImage } from './../helper';
import Banner from '../components/common/Banner';
import TeamMembers1 from './../components/Team/TeamMembers1';
import ImageAndDescriptionRow from './../components/ContactUs/ImageAndDescriptionRow';
import PartnersList from '../components/Projects/PartnersList';
import BecomePartner from '../components/Projects/BecomePartner';
import './Team.css';
const teamJsonUrl = process.env.REACT_APP_URL + '/team/team.json';

const OurTeam = () => {
  const descLink = { url: '', text: 'Join Now' };
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(process.env.REACT_APP_S3_URL + 'team/team.json').then((response) => {
      response
        .json()
        .then((data) => {
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
    <div className="main">
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
        <TeamMembers1
          heading={data.TeamMembers.heading}
          subheading={data.TeamMembers.subheading}
          Team={data.TeamMembers.Team}
        ></TeamMembers1>
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

export default OurTeam;
