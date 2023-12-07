import "./featured.scss";
import Image1 from "../../asset/images/Image1.webp";
import Image2 from "../../asset/images/Image2.webp";
import Image3 from "../../asset/images/Image3.webp";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={Image1} className="featuredImg" />
        <div className="featuredTitle">
          <h1>Dublin</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={Image2} className="featuredImg" />
        <div className="featuredTitle">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={Image3} className="featuredImg" />
        <div className="featuredTitle">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
