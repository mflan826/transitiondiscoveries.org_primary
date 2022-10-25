import React, { useState, useEffect } from "react";
import { getTeamImage } from "./../helper";
import Banner from "../components/common/Banner";
import TeamMembers from "../components/Team/TeamMembers";
import { NavLink } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import "./Team.css";

const TeamDetails = ({ match }) => {
  let params = match.params;
  let invalidSlug = false;
  const descLink = { url: "", text: "Join Now" };
  const [data, setData] = useState({});
  const [team, setTeam] = useState({});
  const teamDetailsUrl =
    process.env.REACT_APP_S3_URL + "Team/" + params.slug + ".json";
  //const teamDetailsUrl = process.env.REACT_APP_URL + "/team/erin.json";
  useEffect(() => {
    fetch(teamDetailsUrl)
      .then((response) => response.json())
      .then((data) => {
        let team = localStorage.getItem('team');
        handleTeam(JSON.parse(team), data);
        setData(data)
      })
      .catch((error) => {
        alert(
          "Loading team js data failed" + error + ", team url" + teamDetailsUrl
        );
        invalidSlug = true;
      });
  }, []); 

  const handleTeam = (teamObject, teamDetails) => {
    let team = {};
    teamObject.map((val) => { 
      if (val.TeamMemberName === teamDetails.Banner.TeamMemberName) {
        team.InstaLink = val.InstaLink;
        team.LinkedInLink = val.LinkedInLink;
        team.fbLink = val.fbLink;
        team.twLink = val.twLink;
      }
    })
    setTeam(team)
  }

  if (!data.Banner) {
    return null;
  } 
  return (
    <div className="main">
      <section className=" teamdetail">
        <div className="container">
          <div className="BlogBanner">
            <div className="BlogThumb">
              <img
                src={getTeamImage('', data.Banner.TeamMemberImage)}
                alt="banner"
              />
            </div>
            <div className="MemberInfo ">
              <div className="">
                <h1 className="slider-lead membername">
                  {data.Banner.TeamMemberName}
                </h1>
                <p className="lead green">{data.Banner.TeamMemberJobTitle}</p>
                <p className="">{ReactHtmlParser(data.Banner.TeamMemberbio)}</p>
              </div>
              <div className="">
                {/* <ul className="SocialIcons">
                  <li>
                    <a href={data.Banner.fbLink}>
                      <img src={getTeamImage("fb.png")} class="img-fluid" alt="icon"></img>
                    </a>
                  </li>
                  <li>
                    <a href={data.Banner.twLink}>
                      <img
                        src={getTeamImage("twtr.png")}
                        class="img-fluid"
                        alt="icon"
                      ></img>
                    </a>
                  </li>
                  <li>
                    <a href={data.Banner.InstaLink}>
                      <img
                        src={getTeamImage("insta.png")}
                        class="img-fluid"
                        alt="icon"
                      ></img>
                    </a>
                  </li>
                </ul> */}
                <ul className="SocialIcons">
                  {team.fbLink !== "" ? (
                    <li>
                      <a href={team.fbLink}>
                        <img
                          src={getTeamImage('fb.png')}
                          class="img-fluid"
                          alt="Facebook Icon"
                        ></img>
                      </a>
                    </li>
                  ) : null}
                  {team.twLink !== "" ? (
                    <li>
                      <a href={team.twLink}>
                        <img
                          src={getTeamImage('twtr.png')}
                          class="img-fluid"
                          alt="Twitter Icon"
                        ></img>
                      </a>
                    </li>
                  ) : null}
                  {team.InstaLink !== "" ? (
                    <li>
                      <a href={team.InstaLink}>
                        <img
                          src={getTeamImage('insta.png')}
                          class="img-fluid"
                          alt="Instagram Icon"
                        ></img>
                      </a>
                    </li>
                  ) : null}
                  {team.LinkedInLink != '' &&
                    team.LinkedInLink != 'null' ? (
                      <li>
                        <a href={team.LinkedInLink}>
                          <img
                            src={getTeamImage('linkedin.png')}
                            class="img-fluid"
                            alt="Instagram Icon"
                          ></img>
                        </a>
                      </li>
                    ) : null}
                </ul>
                <p className="">
                  {ReactHtmlParser(data.Banner.TeamMemberbio2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ml-4 mt-4">
        <div className="container">
          <div className="memberMoreDetail">
            {ReactHtmlParser(data.Banner.TeamMemberbio3)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamDetails;
