import React, { useState } from 'react';
import './ResourceList.css';
import ModalBox from './common/ModalBox';
import { getResourceTypes } from '../helper';

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
      link: resource.files.url,
      resourceType: resource.contenttype,
    });
  };
  //console.log(props);
  return (
    <div className="row">
      {props.resources.map((resource) => {
        const rt = getResourceTypes().filter((item) =>
          resource.resourcetypes.includes(item.id)
        );

        return (
          <div className="col-auto col-sm-6 col-lg-4" key={resource.id}>
            <a
              href="#"
              data-toggle="modal"
              data-target="#modalResources"
              className="resourceLink"
              onClick={handleResourceClick(resource)}
            >
              <div className="card">
                <img
                  className="card-img-top"
                  src={resource.thumbnail.src}
                  alt="icon"
                />
                <div className="card-body">
                  <p className="card-title ">
                    {rt.map((item, i) => {
                      return (
                        <span key={i} value={item.id}>
                          {item.title}
                          <br />
                        </span>
                      );
                    })}
                  </p>
                  {/* <p className="card-title ">{resource.indicator}</p> */}
                  <p className="card-text">{resource.name}</p>
                </div>
              </div>
            </a>
          </div>
        );
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
