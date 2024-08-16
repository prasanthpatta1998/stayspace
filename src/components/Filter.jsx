import React, { useContext, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import useConstantsData from "../utils/useConstantsData.jsx";
import { MyContext } from "../utils/MyContextProvider.jsx";

const Filter = ({ property, filterProperties }) => {
  const [filters, setFilters] = useState({
    location: "",
    minPrice: 500,
    maxPrice: 3000,
    bedrooms: "Any",
    amenities: [],
  });

  const [positionTop, setPositionTop] = useState({
    top: "auto",
    bottom: "-100vh",
  });

  const [bedRoomsCount, locations, amenities] = useConstantsData();

  const { filterLayer, updateFilterLayer } = useContext(MyContext);

  useEffect(() => {
    if (filterLayer) {
      setPositionTop({ top: "0px", bottom: "auto" });
      document.body.style.overflow = "hidden";
    } else {
      setPositionTop({ top: "auto", bottom: "-100vh" });
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [filterLayer]);

  const handleChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFilters({ ...filters, amenities: selectedOptions });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleClear = () => {
    setFilters({
      location: "",
      minPrice: 500,
      maxPrice: 3000,
      bedrooms: "Any",
      amenities: [],
    });
  };

  const handleShowPlaces = () => {
    filterProperties(filters);
    setPositionTop({ top: "auto", bottom: "-100%" });
    updateFilterLayer(!filterLayer);
  };

  const closeLayer = () => {
    updateFilterLayer(!filterLayer);
  };

  return (
    <div
      className="filter-main-section"
      style={{ top: `${positionTop.top}`, bottom: `${positionTop.bottom}` }}
    >
      <div className="filter-section">
        <div className="cross-mark-container">
          <RxCross2 className="cross-mark" onClick={() => closeLayer()} />
          <h3>Filters</h3>
        </div>
        <hr />
        <div>
          <h3>
            Price Ranges <span>Nightly prices</span>
          </h3>
          <div className="prices-container">
            <div className="min-price">
              Minimum <br />
              &#x20B9;
              <input
                type="number"
                value={filters.minPrice}
                name="minPrice"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="min-price">
              Maximum <br />
              &#x20B9;
              <input
                type="number"
                value={filters.maxPrice}
                name="maxPrice"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
        </div>
        <hr />
        {/* <div>
          <h3>Number of Bedrooms</h3>
          <div className="bedrooms">
            {bedRoomsCount?.map((each, index) => {
              const buttonActive =
                each === filters.bedrooms ? "button-active" : null;
              return (
                <button
                  onClick={() => setFilters({ ...filters, bedrooms: each })}
                  className={`bed-room-button ${buttonActive}`}
                  key={index}
                >
                  {each}
                </button>
              );
            })}
          </div>
        </div>
        <hr /> */}
        <div>
          <h3>Location</h3>
          <select
            className="locations"
            onChange={(e) =>
              setFilters({ ...filters, location: e.target.value })
            }
            value={filters.location}
          >
            {locations?.map((eachOne, index) => (
              <option key={index} name={eachOne}>
                {eachOne}
              </option>
            ))}
          </select>
        </div>
        <hr />
        <div>
          <h3>Amenities</h3>
          <select
            multiple
            className="locations amenities"
            onChange={(e) => handleChange(e)}
            value={filters.amenities}
          >
            {amenities?.map((eachOne, index) => (
              <option key={index} name={eachOne} value={eachOne}>
                {eachOne}
              </option>
            ))}
          </select>
        </div>
        <div className="clear-all-container">
          <button className="logout" onClick={() => handleClear()}>
            Clear All
          </button>
          <button className="logout" onClick={() => handleShowPlaces()}>
            Show Places
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
