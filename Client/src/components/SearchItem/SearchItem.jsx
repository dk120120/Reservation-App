import React from "react";
import Image7 from "../../asset/images/Image7.jpg";
import "./SearchItem.scss";
const SearchItem = () => {
  return (
    <div className="SearchItem">
      <img src={Image7} />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siFair">Free airport taxi</span>
        <span className="sisubTitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubTitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siDetailsTop">
          <span>Excellent</span>
          <button type="button">8.9</button>
        </div>
        <div className="siDetailsBottom">
          <span className="price">$112</span>
          <span className="text">Includes taxes and fees</span>
          <button type="button">See Availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
