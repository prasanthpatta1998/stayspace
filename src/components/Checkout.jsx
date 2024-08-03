import React, { useContext, useState } from "react";
import * as Yup from "yup";
import Header from "./Header";
import "./Cart.css";
import { useFormik } from "formik";
import { MyContext } from "../utils/MyContextProvider";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const schema = Yup.object().shape({
  fullname: Yup.string()
    .required("Full name required")
    .test(
      "has-first-and-last-name",
      "Full name must include first and last name",
      (value) => {
        if (!value) return false;
        const parts = value.trim().split(" ");
        return (
          parts.length >= 2 && parts[0]?.length > 0 && parts[1]?.length > 0
        );
      }
    ),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .matches(/^\d+$/, "Phone Number must only contain digits")
    .min(10, "Phone Number must be at least 10 digits long")
    .max(15, "Phone Number can be at most 15 digits long"),
  cardNumber: Yup.string()
    .required("Card Number is required")
    .matches(/^\d{16}$/, "Card Number must be exactly 16 digits"),
  expiryDate: Yup.string()
    .required("Expiry Date is required")
    .matches(
      /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
      "Expiry Date must be in MM/YY format"
    ),
  cvc: Yup.string()
    .required("CVC is required")
    .matches(/^\d{3,4}$/, "CVC must be 3 or 4 digits"),
});

const Checkout = () => {
  const navigate = useNavigate();

  const { totalCharge, setItems } = useContext(MyContext);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [popup, setPopup] = useState({
    top: "auto",
    left: "auto",
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phoneNumber: "",
      cardNumber: "",
      expiryDate: "",
      cvc: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      setPopup({
        top: "0px",
        left: "0px",
      });
      formik.resetForm();
      setItems([]);
    },
  });

  const handlePopup = () => {
    setPopup({ top: "auto", left: "auto" });
    navigate("/home");
  };

  return (
    <>
      <Header />
      <section className="checkout-section">
        <h2>Checkout</h2>
        <form className="checkout-form" onSubmit={formik.handleSubmit}>
          <div className="form-container">
            <div>
              <h2>Contact Information</h2>
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                placeholder="Full name"
                name="fullname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullname}
              />
              <p className="error">
                {formik.errors.fullname &&
                  formik.touched.fullname &&
                  formik.errors.fullname}
              </p>
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <p className="error">
                {formik.errors.email &&
                  formik.touched.email &&
                  formik.errors.email}
              </p>
              <label htmlFor="">Phone Number</label>
              <input
                type="number"
                placeholder="Phone Number"
                name="phoneNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
              />
              <p className="error">
                {formik.errors.phoneNumber &&
                  formik.touched.phoneNumber &&
                  formik.errors.phoneNumber}
              </p>
            </div>
            <div>
              <h2>Payment Details</h2>
              <label htmlFor="">Card Number</label>
              <input
                type="number"
                placeholder="Card Number"
                name="cardNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cardNumber}
              />
              <p className="error">
                {formik.errors.cardNumber &&
                  formik.touched.cardNumber &&
                  formik.errors.cardNumber}
              </p>
              <label htmlFor="">Expiry Date:</label>
              <input
                type="text"
                placeholder="Expiry Date"
                name="expiryDate"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.expiryDate}
              />
              <p className="error">
                {formik.errors.expiryDate &&
                  formik.touched.expiryDate &&
                  formik.errors.expiryDate}
              </p>
              <label htmlFor="">CVC:</label>
              <input
                type="number"
                placeholder="..."
                name="cvc"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cvc}
              />
              <p className="error">
                {formik.errors.cvc && formik.touched.cvc && formik.errors.cvc}
              </p>
            </div>
          </div>
          <div className="checkout-button-container">
          <button type="submit" className="payment-button">
            &#x20B9;{totalCharge}
          </button>
          </div>
        </form>
      </section>
      <div
        className="payment-suceessful-container"
        style={{ top: `${popup.top}`, left: `${popup.left}` }}
      >
        <div>
          <RxCross2 className="close-popup" onClick={() => handlePopup()} />
          Payment is successfull
        </div>
      </div>
    </>
  );
};

export default Checkout;
