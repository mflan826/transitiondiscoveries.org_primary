import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { getImage } from './../../helper';
import './PartnersList.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const PartnersList = (props) => {
  return (
    <div className="container" align="">
      <h2 className="green">{props.heading}</h2>
      <p className="sub-txt mb-3">{props.subheading}</p>

      <div className="PartnersBox">
        <div className="PartnersLeftBox">
          <img
            className=""
            src={props.PartnersLeftBoxImg}
            className="img-fluid"
            alt="Blank Alt Tag"
          ></img>
          <div className="LeftBoxDesc">
            <p className="">{props.LeftBoxDesc}</p>
          </div>
        </div>
        <div className="PartnersRightBox">
          <Tabs>
            <TabList>
              <Tab>{props.TabTitle1}</Tab>
              <Tab>{props.TabTitle2}</Tab>
            </TabList>

            <TabPanel>
              <ul>
                {(props.Tabdata1 || []).map((item, index) => {
                  return (
                    <li className="partnerLogoList">
                      <img
                        src={getImage(item.image)}
                        className=""
                        alt={'Join Us' + index}
                      ></img>
                    </li>
                  );
                })}
              </ul>
            </TabPanel>
            <TabPanel>
              <ul>
                {(props.Tabdata2 || []).map((item, index) => {
                  return (
                    <li className="partnerLogoList">
                      <img
                        src={getImage(item.image)}
                        className=""
                        alt={'Blank Alt Tag' + index}
                      ></img>
                    </li>
                  );
                })}
              </ul>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PartnersList;
