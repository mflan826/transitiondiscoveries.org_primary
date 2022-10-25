import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ROUTES, { RenderRoutes } from "./Routes";

const Layout = (props) => {
  if (!props.data) {
    return null;
  }
  return (
    <div>
      <Header data={props.data.header} />
      {/* 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/TQEPTD" component={TQEPTD} />
        <Route path="/events" component={Events} />
        <Route path="/resources" component={Resources} />
        <Route path="/activity-lessons" component={ActivityLessons} />
        <Route path="/activity-lesson/:slug" component={ManageIndicators} />
        <Route path="/activity-lesson" component={ManageIndicators} />
        <Route path="/subindicators" component={SubIndicators} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contactus" component={ContactUs} />
      <Route component={NotFound} />
      </Switch>*/}
      <div className="content">
        <RenderRoutes routes={ROUTES} />
      </div>
      <Footer data={props.data.footer} />
    </div>
  );
};

export default Layout;
