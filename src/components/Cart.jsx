import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "./Header";
import { MyContext } from "../utils/MyContextProvider";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import useImagesMap from "../utils/useImagesMap";
import Footer from "./Footer";
import emptyCart from "../assets/images/empty_cart.svg";
import SingleCart from "./SingleCart";

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
                <SingleCart
                  key={eachItem.id}
                  totalCost={totalCost}
                  eachItem={eachItem}
                  decrementItemCount={decrementItemCount}
                  incrementItemCount={incrementItemCount}
                  removeItem={removeItem}
                />
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
