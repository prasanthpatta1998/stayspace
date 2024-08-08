import React, { useContext } from "react";
import { MyContext } from "../utils/MyContextProvider";
import useImagesMap from "../utils/useImagesMap";

const SingleProperty = (props) => {
  const { property } = props;
  const { id, title, image, description, price } = property;
  const { items, updateCartItems } = useContext(MyContext);

  const imagesMap = useImagesMap();

  const addingToCart = () => {
    updateCartItems(property);
  };

  return (
    <article>
      <div className="home-image-container">
        <img
          src={imagesMap[property.image]}
          alt={title}
          className="property-image"
        />
      </div>
      <div className="details-container">
        <div>
          <h4>{title}</h4>
          <p className="overflow-element">{description}</p>
        </div>
        <div className="price-container">
          <p>
            &#x20B9;{price} <small>/day</small>
          </p>
          <button className="logout" onClick={() => addingToCart()}>
            {" "}
            Book Now
          </button>
        </div>
      </div>
    </article>
  );
};

export default SingleProperty;
