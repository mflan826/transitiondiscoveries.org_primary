import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Team from "./Team";
import TeamDetails from "./TeamDetails";
import TQEPTD from "./TQEPTD";
import Events from "./Events";
import FAQs from "./FAQs";
import Resources from "./Resources";
import ResourcePage from "./ResourcePage";
import ActivityLessons from "./ActivityLessons";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";
import NotFound from "./NotFound";
import ManageIndicators from "./ManageIndicators";
import SubIndicators from "./SubIndicators";
import ManageSubIndicators from "./ManageSubIndicators";
import WhatWorks from "./WhatWorks";
import GetConnected from "./GetConnected";
import ProjectDetail from "./ProjectDetail";
import ProjectsListing from "./ProjectsListing";
import Partners from "./Partners";
import Contributors from "./Contributors";
import Policies from "./Policies";
import Blogs from "./Blogs";
import StoryListing from "./StoryListing";
import EventPage from "./EventPage";
import StoryPage from "./StoryPage";
import BlogPage from "./BlogPage";
import OurTeamDetails from "./OurTeamdetails";
import Search from './Search';
import Searches from './Searches';
import Ourteam from "./Ourteam";

const ROUTES = [
  {
    path: "/globalSearch",
    key: "SEARCH",
    component: Search
  },
  {
    path: "/search",
    key: "SEARCH",
    component: Searches
  },
  { path: "/", key: "ROOT", exact: true, component: Home, breadcrumb: "Home" },
  { path: "/TQEPTD", key: "TQEPTD", component: TQEPTD, breadcrumb: "TQEPTD" },
  {
    path: "/events/:slug",
    key: "EVENTPAGE",
    component: EventPage,
    breadcrumb: "Event Page",
  },
  { path: "/events", key: "EVENTS", component: Events, breadcrumb: "Events" },
  {
    path: "/resources",
    key: "RESOURCES",
    component: Resources,
    breadcrumb: "Resources",
  },
  {
    path: "/resource-details/:slug",
    key: "RESOURCEPAGE",
    component: ResourcePage,
    breadcrumb: "Resource Detail Page",
  },
  {
    path: "/projects/:slug",
    key: "PROJECTDETAILSLUG",
    component: ProjectDetail,
    breadcrumb: "Project Detail",
  },

  {
    path: "/aboutus",
    key: "ABOUTUS",
    component: AboutUs,
    breadcrumb: "About Us",
  },
  {
    path: "/our-team",
    key: "TEAM",
    component: Team,
    breadcrumb: "Team",
  },
  {
    path: "/our-team1",
    key: "TEAM1",
    component: Ourteam,
    breadcrumb: "Team",
  },
  {
    path: "/team/:slug",
    key: "TEAMDETAILS",
    component: TeamDetails,
    breadcrumb: "Team Details",
  },
  {
    path: "/team1/:slug",
    key: "TEAMDETAILS",
    component: OurTeamDetails,
    breadcrumb: "Team Details",
  },
  {
    path: "/get-connected",
    key: "GETCONNECTED",
    component: GetConnected,
    breadcrumb: "Get Connected",
  },
  {
    path: "/partners",
    key: "PARTNERS",
    component: Partners,
    breadcrumb: "Partners",
  },
  {
    path: "/contributors",
    key: "CONTRIBUTORS",
    component: Contributors,
    breadcrumb: "Contributors",
  },
  {
    path: "/policies/:slug",
    key: "POLICIES",
    component: Policies,
    breadcrumb: "Policies",
  },
  {
    path: "/terms-and-conditions",
    key: "TERMSANDCONDITIONS",
    component: Policies,
    breadcrumb: "Terms and Conditions",
  },
  {
    path: "/faqs",
    key: "FAQs",
    component: FAQs,
    breadcrumb: "FAQs",
  },
  {
    path: "/our-framework/:indicator/:subindicator",
    key: "OURFRAMEWORKSUBINDICATORS",
    component: ManageSubIndicators,
    breadcrumb: "Our Framework SubIndicator Slug",
  },
  {
    path: "/our-framework/:slug",
    key: "OURFRAMEWORKSLUG",
    component: ManageIndicators,
    breadcrumb: "Our Framework Slug",
  },
  {
    path: "/our-framework",
    key: "OURFRAMEWORK",
    component: ActivityLessons,
    breadcrumb: "Our Framework",
  },
  {
    path: "/subindicators",
    key: "SUBINDICATOR",
    component: SubIndicators,
    breadcrumb: "Sub Indicators",
  },
  {
    path: "/gallery",
    key: "GALLERY",
    component: Gallery,
    breadcrumb: "Gallery",
  },
  {
    path: "/blogs/:slug",
    key: "BLOGPAGE",
    component: BlogPage,
    breadcrumb: "Blog Page",
  },
  {
    path: "/blogs",
    key: "BLOGS",
    component: Blogs,
    breadcrumb: "Blogs",
  },
  {
    path: "/story-listings/:slug",
    key: "STORYLISTINGPAGE",
    component: StoryPage,
    breadcrumb: "Story Listing Page",
  },
  {
    path: "/story-listings",
    key: "STORYLISTING",
    component: StoryListing,
    breadcrumb: "Story Listing",
  },
  {
    path: "/contactus",
    key: "CONTACTUS",
    component: ContactUs,
    breadcrumb: "Contact Us",
  },
  {
    path: "/what-works",
    key: "WHATWORKS",
    component: WhatWorks,
    breadcrumb: "What Works",
  },
  { path: "/*", key: "NOTFOUND", component: NotFound, breadcrumb: "" },
];

export default ROUTES;

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}
