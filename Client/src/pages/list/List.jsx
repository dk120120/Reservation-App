import React from "react";
import Navbar from "../../components/navbar/navBar";
import Header from "../../components/header/Header";
import "./List.scss";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import SearchItem from "../../components/SearchItem/SearchItem";
const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  console.log(date);
  const handleOptions = (e) => {
    const { name, value } = e.target;
    setOptions({ ...options, [name]: value });
  };
  const [openDate, setOpenDate] = useState(false);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearchTitle">Search</h1>
            <div className="listSearchPlaces">
              <label htmlFor="Destination">Destination</label>
              <input
                type="text"
                id="Destination"
                onChange={(e) => {
                  setDestination(e.target.value);
                }}
                placeholder={destination}
              />
            </div>
            <div className="listSearchPlaces">
              <label htmlFor="Check in Date">Check in Date</label>
              <span
                onClick={() => {
                  setOpenDate(!openDate);
                }}
                className="datepicker"
              >{`${format(date[0].startDate, "dd/mm/yyyy")} to ${format(
                date[0].endDate,
                "dd/mm/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  // editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  // moveRangeOnFirstSelection={false}
                  minDate={new Date()}
                  ranges={date}
                  className="daterangepicker"
                />
              )}
            </div>
            <div className="listSearchOptions">
              <span>Options</span>
              <div className="listSearchOptionsItems">
                <span>
                  Min price <small>per night</small>
                </span>
                <input type="number" />
              </div>
              <div className="listSearchOptionsItems">
                <span>
                  Max price <small>per night</small>
                </span>
                <input type="number" />
              </div>
              <div className="listSearchOptionsItems">
                <span>Adult</span>
                <input
                  type="number"
                  value={options.adult}
                  name="adult"
                  onChange={handleOptions}
                  min="1"
                />
              </div>
              <div className="listSearchOptionsItems">
                <span>Children</span>
                <input
                  type="number"
                  value={options.children}
                  name="children"
                  onChange={handleOptions}
                  min="0"
                />
              </div>
              <div className="listSearchOptionsItems">
                <span>Room</span>
                <input
                  type="number"
                  value={options.room}
                  onChange={handleOptions}
                  name="room"
                  min="1"
                />
              </div>
            </div>
            <button type="button">Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
