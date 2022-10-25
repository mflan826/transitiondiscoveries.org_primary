import React from "react";
import ImageLinkTile from "../../components/ImageLinkTile";
import HeaderRow from "../../omponents/common/HeaderRow";

const GetInvolvedRow = (props) => {
  return (
    <div className="container ">
      <HeaderRow
        heading={props.headerRow.heading}
        text={props.headerRow.text}
      />
      <div className="container involvmnt-grid">
        {props.imageLinkTiles.map((imageLinkTile) => (
          <ImageLinkTile
            key={imageLinkTile.id}
            imageName={imageLinkTile.imageName}
            linkText={imageLinkTile.linkText}
          />
        ))}
      </div>
    </div>
  );
};
export default GetInvolvedRow;
