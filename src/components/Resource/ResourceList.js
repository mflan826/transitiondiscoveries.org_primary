import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './ResourceList.css';
import ModalBox from '../common/ModalBox';
import { getResourceTypes } from '../../helper';
import ResourceCard from './ResourceCard';

const ResourceList = (props) => {
  const [resourceArtifact, setResourceArtifact] = useState({
    title: '',
    link: '',
    resourceType: '',
  });

  const handleResourceClick = (resource) => (event) => {
    if (
      typeof resource.contenttype === 'undefined' ||
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
    <div className="row">
      {props.resources.map((resource) => {
        const rt = getResourceTypes().filter((item) =>
          resource.resourcetypes.includes(item.id)
        );
        if (resource.contenttype == 'detailed_description') {
          return (
            <div className="col-auto col-lg-4 col-sm-6" key={resource.id}>
              <NavLink
                className="resourceLink"
                to={{
                  pathname: '/resource-details/' + resource.path,
                }}
              >
                <ResourceCard resource={resource}></ResourceCard>
              </NavLink>
            </div>
          );
        } else if (resource.contenttype == 'external_link') {
          return (
            <div className="col-auto col-lg-4 col-sm-6" key={resource.id}>
              <a
                href={resource.external_link}
                className="resourceLink"
                target="_blank"
              >
                <ResourceCard resource={resource}></ResourceCard>
              </a>
            </div>
          );
        } else if (resource.contenttype == 'pdf') {
          return (
            <div className="col-auto col-lg-4 col-sm-6" key={resource.id}>
              <a
                href={resource.files.src}
                className="resourceLink"
                target="_blank"
              >
                <ResourceCard resource={resource}></ResourceCard>
              </a>
            </div>
          );
        } else {
          return (
            <div className="col-auto col-lg-4 col-sm-6" key={resource.id}>
              <a
                href="#"
                data-toggle="modal"
                data-target="#modalResources"
                className="resourceLink"
                onClick={handleResourceClick(resource)}
              >
                <ResourceCard resource={resource}></ResourceCard>
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
export default ResourceList;
