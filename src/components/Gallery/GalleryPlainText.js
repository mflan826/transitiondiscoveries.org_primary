import React from "react";
import ReactHtmlParser from "react-html-parser";

const font={
  'font-size':'1.75rem'
}

const GalleryPlainText = (props) => {
  return (
    <div className="container GalleryPlainText-grid ptb-40">
      <div class="item-a" align="center">
        <div class="">
          
            <div>     
              <strong class="green" style={font}>
                {props.heading}
              </strong>
              </div>
         

          <p>{ReactHtmlParser(props.content)}</p>
        </div>
      </div>
    </div>
  );
};
export default GalleryPlainText;
