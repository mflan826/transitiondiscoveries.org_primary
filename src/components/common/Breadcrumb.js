import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link, useLocation } from "react-router-dom";
import ROUTES from "../../pages/Routes";

const Breadcrumb = (props) => {
  const breadcrumbs = useBreadcrumbs(ROUTES);
  let location = useLocation();
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {breadcrumbs.map(({ match, breadcrumb }) => {
          if (match.url === location.pathname) {
            return (
              <li
                key={match.url}
                className="breadcrumb-item active"
                aria-current="page"
              >
                <span>{breadcrumb}</span>
              </li>
            );
          } else {
            return (
              <li key={match.url} className="breadcrumb-item">
                <Link to={match.url}>{breadcrumb}</Link>
              </li>
            );
          }
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
