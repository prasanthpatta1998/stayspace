import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Properties from "./mock/mockPropertiesData.json";
import "./Home.css";
import SingleProperty from "./SingleProperty";
import Filter from "./Filter";
import stayspace from "../assets/images/stayspace_img.png";
import { HeaderShimmer, Shimmer } from "./Shimmer";
import { MyContext } from "../utils/MyContextProvider";

const Home = () => {
  const [properties, setProperties] = useState(Properties);
  const [tempData, setTempData] = useState(Properties);
  const {shimmer, setShimmer} = useContext(MyContext)

  useEffect(() => {
    setTimeout(() => {
      setShimmer(false);
    }, 4000);
  },[shimmer]);

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
              <div className="empty-property-message">
                <p>Room you're looking for are not available.</p>
              </div>
            )}
          </section>
        )}
        <Filter property={properties} filterProperties={filterProperties} />
      </main>
    </>
  );
};

export default Home;
