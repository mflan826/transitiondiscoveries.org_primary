import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import './ProjectLeftBar.css';

const ProectLeftBar = (props) => {
  let sectionHead;
  if (props.sectionHeading) {
    sectionHead = <h2>{props.sectionHeading}</h2>;
  }
  return (
    <aside class="col-md-3 col-sm-12">
      <div class="mt-2 mb-3 affix-top" id="sidemenu">
        <ul class="service-left-menu ">
          {sectionHead}

          {(props.Leftmenu || []).map((item) => {
            return (
              <li className={item.isActive}>
                <a href={item.link}>{item.label}</a>
              </li>
            );
          })}
        </ul>

        <div class="becom-ptn">
          <h2 class="sublead-txt white">{props.CtaHead}</h2>
          <p class="btn-join white">
            <a href={props.CtaLinkHref}>{props.CtaLinkText}</a>
          </p>
        </div>
      </div>
    </aside>
  );
};

export default ProectLeftBar;
