import React from "react";
import { useState } from 'react';
import PDFViewer from "./PDFViewer";
import VideoPlayer from "./VideoPlayer";
import "./Modalbox.css";
import $ from 'jquery';


const handleClick=()=>{
 
    $(".modal iframe").attr("src", $(".modal iframe").attr("src"));

}




const ModalBox = (props) => {
  console.log(props,'fffhh');
  let modalContent;
  let downloadLink;

 

  if (props.resourceType === "pdf") {
    modalContent = <PDFViewer url={props.link}></PDFViewer>;
    downloadLink = (
      <a type="button" href={props.link} className="btn btn-primary mx-2">
        <span
          className="glyphicon glyphicon-download-alt"
          aria-hidden="true"
        ></span>
        Download
      </a>
    );
  } else {
    modalContent = <VideoPlayer url={props.link} type={props.type}></VideoPlayer>;
  }

  return (
  
    <div className="modal fade" id={props.id} role="dialog">
   
      <div className="modal-dialog modal-lg">
        <div className="modal-content ">
          <div className="modal-header">
            {props.title ? (
              <h5 className="modal-title">{props.title}</h5>
            ) : null}
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              title="UP button"
              onClick={handleClick}
            >
              <span aria-hidden="true" >&times;</span>
            </button>
          </div>
          <div className="modal-body">{modalContent}</div>
          <div className="modal-footer">
            {downloadLink}
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
              title="UP button"
              onClick={handleClick}
            >
              Close
            </button>
          </div>
        </div>
      </div> 
    </div> 
  );
};
export default ModalBox;
