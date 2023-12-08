import Image9 from "../../asset/images/Image9.jpg";
import "./featuredProperties.scss";

const FeaturedProperties = () => {
  return (
    <>
      <div className="fp">
        <div className="fpItem">
          <img src={Image9} />

          <span className="fpTitle">Aparthotel Stare Miasto</span>
          <span>Madrid</span>
          <span className="fppara">Starting from $120</span>
          <div className="fprating">
            <button type="button">8.9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <img src={Image9} />

          <span className="fpTitle">Aparthotel Stare Miasto</span>
          <span>Madrid</span>
          <span className="fppara">Starting from $120</span>
          <div className="fprating">
            <button type="button">8.9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <img src={Image9} />

          <span className="fpTitle">Aparthotel Stare Miasto</span>
          <span>Madrid</span>
          <span className="fppara">Starting from $120</span>
          <div className="fprating">
            <button type="button">8.9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <img src={Image9} />

          <span className="fpTitle">Aparthotel Stare Miasto</span>
          <span>Madrid</span>
          <span className="fppara">Starting from $120</span>
          <div className="fprating">
            <button type="button">8.9</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProperties;
