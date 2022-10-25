import React, { useState, useEffect } from 'react';
import Banner from '../components/common/Banner';
import ProjectLeftBar from '../components/Projects/ProjectLeftBar';
import PoliciesContent from '../components/Policies/PoliciesContent';
import { getStyle } from './../helper';
const Policies = ({ match }) => {
  let params = match.params;
  const [data, setData] = useState({});

  const policiesJsonUrl =
    process.env.REACT_APP_URL + '/policies/' + params.slug + '.json';
  useEffect(() => {
    fetch(policiesJsonUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        alert(
          'Loading get policies js data failed' +
            error +
            ', get policies url' +
            policiesJsonUrl
        );
      });
  }, []);
  if (!data.Banner) {
    return null;
  }
  return (
    <div className="main" id="policypage">
      <section id={data.Banner.ID}>
        <div
          className="hero-equal-height pt-165 pb-150 gradient-overly-right-light aboutbanner pagebanner"
          page="Policies"
          style={getStyle('Policies', data.Banner.imageName)}
        >
          <Banner heading={data.Banner.heading}></Banner>
        </div>
      </section>
      <div className="container">
        <div class="row  ptb-40">
          <ProjectLeftBar
            heading="Policies"
            CtaHead="Become Our Partners"
            CtaLinkText={data.ProjectLeftBar.CtaLinkText}
            CtaLinkHref={data.ProjectLeftBar.CtaLinkHref}
            Leftmenu={data.ProjectLeftBar.Leftmenu}
          ></ProjectLeftBar>
          <PoliciesContent
            PolicyName={data.PoliciesContent.PolicyName}
            PolicyContent={data.PoliciesContent.PolicyContent}
          ></PoliciesContent>
        </div>
      </div>
    </div>
  );
};

export default Policies;
