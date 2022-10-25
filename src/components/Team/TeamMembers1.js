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

const TeamMembers1 = (props) => {
  const renderAuthButton = (propst) => {
    if (props.Contributors) {
      return (
        <div>
          {props.TeamMembers1.map((_tmMem) => {
            return (
              <div className="container" align="center">
                <h3 className="green">{_tmMem.heading}</h3>
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
                          <a>
                            <img
                              className="img-fluid contrthumb"
                              src={getTeamImage(item.TeamMemberImage)}
                              alt="icon"
                            ></img>
                          </a>
                        </div>
                        <div style={style} align="center">
                          <h3 class=" dark teamname"> {item.TeamMemberName}</h3>

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
          <h3 className="green">{props.heading}</h3>
          <p className="sub-txt mb-3">{props.subheading}</p>
          <div className="horizontleIconText">
            {props.Team.map((item) => {
              return (
                <div className="hIT-1">
                  <div className="hit-11">
                    <a href={'team1/' + item.slug}>
                      <img
                        className="img-fluid"
                        src={getTeamImage(
                          item.TeamMemberImage,
                          item.TeamMemberImage.title
                        )}
                        alt="icon"
                      ></img>
                    </a>
                    {/* {!props.Contributors ?  */}
                    <div className="projectcont">
                      <ul className="SocialIcons">
                        <li>
                          <a href={item.fbLink}>
                            <img
                              src={getTeamImage('fb.png')}
                              class="img-fluid"
                              alt="icon"
                            ></img>
                          </a>
                        </li>
                        <li>
                          <a href={item.twLink}>
                            <img
                              src={getTeamImage('twtr.png')}
                              class="img-fluid"
                              alt="icon"
                            ></img>
                          </a>
                        </li>
                        <li>
                          <a href={item.InstaLink}>
                            <img
                              src={getTeamImage('insta.png')}
                              class="img-fluid"
                              alt="icon"
                            ></img>
                          </a>
                        </li>
                      </ul>
                      <a href={'team1/' + item.slug}>
                        <h4 className=" dark teamname">
                          {item.TeamMemberName}
                        </h4>
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

export default TeamMembers1;
