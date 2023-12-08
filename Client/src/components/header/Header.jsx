import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendar,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [showDate, setShowDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleoptions = (name, operation) => {
    setOptions({
      ...options,
      [name]: operation === "+" ? options[name] + 1 : options[name] - 1,
    });
  };

  const clickhandler = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <>
      <div
        className="header"
        style={type === "list" ? { paddingBottom: "40px" } : {}}
      >
        <div className={"headerContainer"}>
          <div className="headerList">
            <div className="headerItems">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>

            <div className="headerItems">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>

            <div className="headerItems">
              <FontAwesomeIcon icon={faCar} />
              <span>Car Rentals</span>
            </div>

            <div className="headerItems">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>

            <div className="headerItems">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport Taxis</span>
            </div>
          </div>
          {type !== "list" && (
            <>
              <h1 className="headerTitle">
                A lifetime of discounts? It's Genius.
              </h1>
              <p className="headerDesc">
                Get rewarded for your travels - unlock instant savings of 10% or
                more with a free Lamabooking account
              </p>
              <button className="headerBtn">Sign in/Register </button>

              <div className="headerSeacrh">
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faBed} className="headerSearchIcon" />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="headerSearhIcon"
                    onChange={(e) => {
                      setDestination(e.target.value);
                    }}
                  />
                </div>
                <div className="headerSearchItem calender">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="headerSearchIcon"
                  />
                  <span onClick={() => setShowDate(!showDate)}>{`${format(
                    date[0].startDate,
                    "dd/mm/yyyy"
                  )} to ${format(date[0].endDate, "dd/mm/yyyy")}`}</span>
                  {showDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => {
                        setDate([item.selection]);
                        console.log(item);
                      }}
                      minDate={new Date()}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                    />
                  )}
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon
                    icon={faPerson}
                    className="headerSearchIcon"
                  />
                  <span
                    className="openOptions"
                    onClick={() => {
                      setOpenOptions(!openOptions);
                    }}
                  >{`${options.adult} adult + ${options.children} children + ${options.room} `}</span>
                  {openOptions && (
                    <div className="options">
                      <div className="optionItems">
                        <span>Adult</span>
                        <div className="optionClick">
                          <button
                            disabled={options.adult <= 0 ? true : false}
                            className="optionminus"
                            onClick={() => {
                              handleoptions("adult", "-");
                            }}
                          >
                            -
                          </button>
                          <span>{options.adult}</span>
                          <button
                            className="optionadd"
                            onClick={() => {
                              handleoptions("adult", "+");
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItems">
                        <span>Children</span>
                        <div className="optionClick">
                          <button
                            disabled={options.children <= 0 ? true : false}
                            className="optionminus"
                            onClick={() => {
                              handleoptions("children", "-");
                            }}
                          >
                            -
                          </button>
                          <span>{options.children}</span>
                          <button
                            className="optionadd"
                            onClick={() => {
                              handleoptions("children", "+");
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItems">
                        <span>Room</span>
                        <div className="optionClick">
                          <button
                            disabled={options.room <= 0 ? true : false}
                            className="optionminus"
                            onClick={() => {
                              handleoptions("room", "-");
                            }}
                          >
                            -
                          </button>
                          <span>{options.room}</span>
                          <button
                            className="optionadd"
                            onClick={() => {
                              handleoptions("room", "+");
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  className="headerSearchBtn"
                  onClick={() => {
                    clickhandler();
                  }}
                >
                  Search
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
