import React from "react";
import useImagesMap from "../utils/useImagesMap";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";

const SingleCart = ({
  totalCost,
  eachItem,
  removeItem,
  incrementItemCount,
  decrementItemCount,
}) => {
    const imagesMap = useImagesMap();

  return (
    <section key={eachItem.id} className="cart-container">
      <div className="cart-image-container">
        <img
          src={imagesMap[eachItem.image]}
          alt={eachItem.title}
          className="cart-image"
        />
      </div>
      <div className="cart-title-container">
        <h3>{eachItem.title}</h3>

        <p className="cart-price">
          Price <span>&#x20B9;{eachItem.price}</span>
        </p>
        <p className="cart-price">
          Quantity <span>{eachItem.count}</span>
        </p>
        <p className="cart-price">
          Total Price <span>&#x20B9;{totalCost}</span>
        </p>
        <div className="buttons-container">
          <p className="booking-date">Date: {eachItem.bookingDate}</p>
          <div className="button-data-cell">
            <button
              className="cart-buttons"
              style={{ background: "#FFFDD0" }}
              onClick={() => decrementItemCount(eachItem)}
            >
              <FaMinus
                className="cart-button-icon"
                style={{ color: "#FFDB58" }}
              />
            </button>
            <button
              className="cart-buttons"
              onClick={() => incrementItemCount(eachItem)}
              style={{ background: "#D6FFD9" }}
            >
              <FaPlus
                className="cart-button-icon"
                style={{ color: "#024220" }}
              />
            </button>
            <button
              className="cart-buttons"
              onClick={() => removeItem(eachItem.id)}
              style={{ background: "#FFB6B6" }}
            >
              <RiDeleteBinFill
                className="cart-button-icon"
                style={{ color: "#8B0000" }}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCart;
