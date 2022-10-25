import React, { useState } from "react";
import ModalBox from "../common/ModalBox";
import { NavLink } from "react-router-dom";
import "./ResourceList.css";

const RecentResourceList = (props) => {
  const [resourceArtifact, setResourceArtifact] = useState({
    title: "",
    link: "",
    resourceType: "",
  });

  const handleResourceClick = (resource) => (event) => {
    if (
      typeof resource.contenttype === "undefined" ||
      Object.keys(resource.files).length === 0
    ) {
      event.preventDefault();
      return;
    }

    setResourceArtifact({
      title: resource.name,
      link: resource.files.src,
      resourceType: resource.contenttype,
    });
  };


  return (
    <div>
      {props.resources &&
        props.resources.map((resources) => {
          if(resources.contenttype == "detailed_description"){
            return (
              <div className="" key={resources.id}>
                <NavLink
                  to={{
                    pathname: "/resource-details/" + resources.path,
                  }}
                >
                  <div className="RecentPostsBox">
                    <img className="" src={resources.thumbnail.src} alt="icon" />
                    <div className="">
                      <p className="PostTitle ">{resources.name}</p>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          } else if(resources.contenttype == "external_link"){
            return (
              <div className="" key={resources.id}>
                <a
                href={resources.external_link}
                className=""
                target="_blank"
              >
                  <div className="RecentPostsBox">
                    <img className="" src={resources.thumbnail.src} alt="icon" />
                    <div className="">
                      <p className="PostTitle ">{resources.name}</p>
                    </div>
                  </div>
                </a>
              </div>
            );
          } else if(resources.contenttype == "pdf"){

            return (
              <div className="" key={resources.id}>
                <a
                href={resources.files.src}
                className=""
                target="_blank"
                >
                  <div className="RecentPostsBox">
                    <img className="" src={resources.thumbnail.src} alt="icon" />
                    <div className="">
                      <p className="PostTitle ">{resources.name}</p>
                    </div>
                  </div>
                </a>
              </div>
            );

          } else {

            return (
              <div className="" key={resources.id}>
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#modalResources"
                  className=""
                  onClick={handleResourceClick(resources)}
                >
                  <div className="RecentPostsBox">
                    <img className="" src={resources.thumbnail.src} alt="icon" />
                    <div className="">
                      <p className="PostTitle ">{resources.name}</p>
                    </div>
                  </div>
                </a>
              </div>
            );
          }
        })}
       <ModalBox
        id="modalResources"
        resourceType={resourceArtifact.resourceType}
        title={resourceArtifact.title}
        link={resourceArtifact.link}
      ></ModalBox>
    </div>
  );
};
export default RecentResourceList;
