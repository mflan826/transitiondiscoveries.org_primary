import React from 'react';
import { getTeamImage } from './../../helper';
import './TeamMembers.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
  loop: true,
  items: 6,
  nav: true,
  autoplayHoverPause: true,
  autoplay: true,
  dots: false,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
};

const style = {
  'font-size': '1.5rem',
};

const TeamMembers = (props) => {
  debugger;
  const renderAuthButton = (propst) => {
    if (props.Contributors) {
      return (
        <div>
          {props.TeamMembers.map((_tmMem) => {
            return (
              <div className="container" align="center">
                <h2 className="green">{_tmMem.heading}</h2>
                <p className="sub-txt mb-3">{_tmMem.subheading}</p>
                <OwlCarousel
                  className="owl-theme owl-carousel OwlHomeVideos"
                  margin={10}
                  {...options}
                >
                  {_tmMem.Team.map((item) => {
                    return (
                      <div className="hIT-1">
                        <div className="hit-11">
                          <a className="contpic">
                            <img
                              className="img-fluid contrthumb"
                              src={getTeamImage(item.TeamMemberImage)}
                              alt={item.TeamMemberName}
                            ></img>
                          </a>
                        </div>
                        <div style={style} align="center">
                          <h3 class=" dark teamname">{item.TeamMemberName}</h3>

                          <span className="green">{item.WorkPlace}</span>
                        </div>
                        <div align="center">
                          <p className="green designtion">
                            {item.TeamMemberJobTitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </OwlCarousel>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="container" align="center">
          <h2 className="green">{props.heading}</h2>
          <p className="sub-txt mb-3">{props.subheading}</p>
          <div className="horizontleIconText">
            {props.Team.map((item, index) => {
              return (
                <div className="hIT-1">
                  <div className="hit-11">
                    {item.slug != '' && item.slug != 'null' ? (
                      <a href={'team/' + item.slug}>
                        <img
                          className="img-fluid"
                          src={getTeamImage(
                            item.TeamMemberImage,
                            item.TeamMemberImage.title
                          )}
                          alt={'Team Collaboration' + index}
                        ></img>
                      </a>
                    ) : null}

                    <div className="projectcont">
                      <ul className="SocialIcons">
                        {item.fbLink != '' && item.fbLink != 'null' ? (
                          <li>
                            <a href={item.fbLink}>
                              <img
                                src={getTeamImage('fb.png')}
                                class="img-fluid"
                                alt="Facebook Icon"
                              ></img>
                            </a>
                          </li>
                        ) : null}
                        {item.twLink != '' && item.twLink != 'null' ? (
                          <li>
                            <a href={item.twLink}>
                              <img
                                src={getTeamImage('twtr.png')}
                                class="img-fluid"
                                alt="Twitter Icon"
                              ></img>
                            </a>
                          </li>
                        ) : null}
                        {item.InstaLink != '' && item.InstaLink != 'null' ? (
                          <li>
                            <a href={item.InstaLink}>
                              <img
                                src={getTeamImage('insta.png')}
                                class="img-fluid"
                                alt="Instagram Icon"
                              ></img>
                            </a>
                          </li>
                        ) : null}
                        {item.LinkedInLink != '' &&
                        item.LinkedInLink != 'null' ? (
                          <li>
                            <a href={item.LinkedInLink}>
                              <img
                                src={getTeamImage('linkedin.png')}
                                class="img-fluid"
                                alt="Instagram Icon"
                              ></img>
                            </a>
                          </li>
                        ) : null}
                      </ul>
                      <a href={'team/' + item.slug}>
                        <h3 className=" dark teamname">
                          {item.TeamMemberName}
                        </h3>
                        <p className="green designtion">
                          {item.TeamMemberJobTitle}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  };

  return <div className="container">{renderAuthButton()}</div>;
};

export default TeamMembers;
