import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "./Header";
import Properties from "./mock/mockPropertiesData.json";
import "./Home.css";
import SingleProperty from "./SingleProperty";
import Filter from "./Filter";
import stayspace from "../assets/images/stayspace_img.png";
import { HeaderShimmer, Shimmer } from "./Shimmer";
import { MyContext } from "../utils/MyContextProvider";
import Footer from "./Footer";
import NoResult from "../assets/images/empty_result.svg";

const Home = () => {
  const [properties, setProperties] = useState(Properties);
  const [tempData, setTempData] = useState(Properties);
  const { shimmer, setShimmer } = useContext(MyContext);
  const heightRef = useRef(null);
  const [emptyRoomsHeight, setemptyRoomsHeight] = useState("300px");

  useEffect(() => {
    setTimeout(() => {
      setShimmer(false);
    }, 4000);
  }, [shimmer]);

  useEffect(() => {
    const updateHeight = () => {
      if (heightRef.current) {
        const viewportHeight = window.innerHeight;
        setemptyRoomsHeight(viewportHeight -189);
      }
    };
    updateHeight();
  }, [properties]);

  const filterProperties = (filterData) => {
    const { location, minPrice, maxPrice, bedrooms, amenities } = filterData;
    const filteredProperties = tempData.filter((property) => {
      const matchesLocation = location
        ? property.location.includes(location)
        : true;
      const matchesPrice =
        (minPrice ? property.price >= minPrice : true) &&
        (maxPrice ? property.price <= maxPrice : true);
      let matchesRooms;
      if (bedrooms === "Any") {
        matchesRooms = true;
      } else {
        matchesRooms = bedrooms ? property.bedrooms === bedrooms : true;
      }
      const matchesAmenities =
        amenities.length > 0
          ? amenities?.every((ameniti) => property.amenities.includes(ameniti))
          : true;

      return (
        matchesLocation && matchesPrice && matchesRooms && matchesAmenities
      );
    });

    setProperties([...filteredProperties]);
  };

  return (
    <>
      {shimmer ? <HeaderShimmer /> : <Header filterIcon="true" />}
      <main>
        {/* <section>
          <img src={stayspace} alt="Stay Space" />
        </section> */}
        {shimmer ? (
          <Shimmer />
        ) : (
          <section className="properties-list-container">
            {properties?.length > 0 ? (
              <>
                {properties?.map((eachProperty) => {
                  return (
                    <SingleProperty
                      key={eachProperty.id}
                      property={eachProperty}
                    />
                  );
                })}
              </>
            ) : (
              <div
                ref={heightRef}
                className="empty-property-message"
                style={{ height: `${emptyRoomsHeight}px` }}
              >
                <div>
                  <img src={NoResult} alt="No Result" className="error-image" />
                </div>
                <p>Room you're looking for are not available.</p>
              </div>
            )}
          </section>
        )}
        <Filter property={properties} filterProperties={filterProperties} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
