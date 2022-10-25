import React from "react";
import { NavLink, Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <ul className="navbar-nav ml-auto menu">
      {props.items.map((menuItem, i) => {
        if (menuItem.submenu !== undefined) {
          return (
            <li aria-hidden="true" role="presentation" key={i} title={menuItem.title} className="mx-2">
              <Link
                className="dropdown-toggle"
                as={Link}
                to={menuItem.link === undefined ? "#" : menuItem.link}
              >
                {menuItem.title}
              </Link>
              <ul className="sub-menu">
                {menuItem.submenu.map((submenuItem, j) => (
                  <li key={j}>
                    <NavLink onClick= { () => props.setExpanded(false)} exact as={NavLink} to={submenuItem.link}>
                      {submenuItem.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          );
        } else {
          return (
            <li key={i} className="mx-2">
              <NavLink onClick= { () => props.setExpanded(false)}  exact as={NavLink} to={menuItem.link}>
                {menuItem.title}
              </NavLink>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Menu;
