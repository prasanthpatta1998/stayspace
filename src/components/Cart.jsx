import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "./Header";
import { MyContext } from "../utils/MyContextProvider";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import useImagesMap from "../utils/useImagesMap";
import Footer from "./Footer";
import emptyCart from "../assets/images/empty_cart.svg";

const cleaningFee = 100;

const Cart = () => {
  const navigate = useNavigate();
  const [emptyCartHeight, setEmptyCartHeight] = useState("300px");

  const {
    items,
    incrementItemCount,
    decrementItemCount,
    removeItem,
    setTotalCharge,
  } = useContext(MyContext);

  const totalPrice = items.reduce(
    (total, item) => total + parseInt(item.price) * item.count,
    0
  );

  const totalRooms = items.reduce(
    (totalRooms, room) => totalRooms + room.count,
    0
  );

  const imagesMap = useImagesMap();

  const totalCharges = totalPrice + cleaningFee * totalRooms;

  useEffect(() => {
    const updateCartHeight = () => {
      const viewportHeight = window.innerHeight;
      setEmptyCartHeight(viewportHeight - 189);
    };
    updateCartHeight();
  }, []);

  // useEffect(() => {
  //   if(items?.length === 0){
  //     document.body.style.overflow = 'hidden'
  //   }
  // },[items])

  return (
    <>
      <Header filterIcon="false" />
      {items?.length > 0 ? (
        <section
          className="cart-items-total-charge-container"
          style={{ marginTop: "80px" }}
        >
          <section className="cart-tems-display">
            {items?.map((eachItem) => {
              const totalCost = parseInt(eachItem.price) * eachItem.count;
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
                      <p className="booking-date">
                        Date: {eachItem.bookingDate}
                      </p>
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
            })}
          </section>
          <section className="cart-total-amount">
            <h2>Cart Totals</h2>
            <hr />
            <p>
              Subtotal{" "}
              <span className="total-charge">&#x20B9;{totalPrice}</span>
            </p>
            <p>
              Cleaning fee{" "}
              <span className="total-charge">
                &#x20B9;{cleaningFee * totalRooms}
              </span>
            </p>
            <hr />
            <p>
              <span>
                Total <u>(INR)</u>
              </span>{" "}
              <strong className="total-charge">&#x20B9;{totalCharges}</strong>
            </p>

            <button
              className="checkout-button"
              onClick={() => (
                setTotalCharge(totalCharges), navigate("/checkout")
              )}
            >
              Proceed to Checkout
            </button>
          </section>
        </section>
      ) : (
        <div
          className="empty-cart-message"
          style={{ height: `${emptyCartHeight}px` }}
        >
          <div>
            <img src={emptyCart} alt="Empty Cart" className="error-image" />
          </div>
          <p>Your cart is empty</p>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Cart;
