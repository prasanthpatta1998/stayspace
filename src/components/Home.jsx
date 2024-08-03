import React, { useState } from "react";
import Header from "./Header";
import Properties from "./mock/mockPropertiesData.json";
import "./Home.css";
import SingleProperty from "./SingleProperty";
import Filter from "./Filter";

const Home = () => {
  const [properties, setProperties] = useState(Properties);

  const filterProperties = (filterData) => {
    const { location, minPrice, maxPrice, bedrooms, amenities } = filterData;
    const filteredProperties = properties.filter((property) => {
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
      <Header filterIcon="true" />
      <main>
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
              <p>Property you're looking for are not available.</p>
            </div>
          )}
        </section>
        <Filter property={properties} filterProperties={filterProperties} />
      </main>
    </>
  );
};

export default Home;
