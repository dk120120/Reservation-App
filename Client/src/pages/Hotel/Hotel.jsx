import React, { useState } from "react";
import Navbar from "../../components/navbar/navBar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./Hotel.scss";
import Photos from "../../../files/photos.js";
import MailList from "../../components/mailList/MailList.jsx";
import Footer from "../../components/Footer/Footer.jsx";
const Hotel = () => {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = (i) => {
    setSliderNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if ((direction = "l")) {
      newSlideNumber = sliderNumber === 0 ? 5 : sliderNumber - 1;
    } else {
      newSlideNumber = sliderNumber === 5 ? 0 : sliderNumber + 1;
    }

    setSliderNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotleContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => {
                setOpen(false);
              }}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => {
                handleMove("l");
              }}
            />
            <div className="sliderWraper">
              <img src={Photos[sliderNumber].src} className="sliderImage" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => {
                handleMove("r");
              }}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <div className="hoteltop">
            <div className="hotelAddress">
              <h1>Tower Street Apartments</h1>
              <div className="location">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>Elton St 125 New york</span>
              </div>
              <span className="hotelDistance">
                Excellent location – 500m from center
              </span>
              <div className="hotelBooking">
                Book a stay over $114 at this property and get a free airport
                taxi
              </div>
            </div>
            <button type="button">Reserve or Book Now!</button>
          </div>
          <div className="hotelMiddle">
            {Photos.map((photo, i) => {
              return (
                <div className="hotelImageWrapper">
                  <img
                    src={photo.src}
                    className="hotelImg"
                    onClick={() => {
                      handleOpen(i);
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div className="hotelBottom">
            <div className="left">
              <h1>Stay in the heart of City</h1>
              <p>
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="right">
              <h1>Perfect for a 9-night stay!</h1>
              <p>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </p>
              <span className="price">
                <b>$945</b> (9 nights)
              </span>
              <button type="button">Reserve or Book now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
