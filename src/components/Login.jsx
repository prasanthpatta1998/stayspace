import React, { useState } from "react";
import * as Yup from "yup";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      "Password must contain at least one uppercase, one lowercase, one number, and one special character"
    ),
});

const Login = () => {
  const navigate = useNavigate();
  const [icon, setIcon] = useState(true);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      if (
        localStorage.getItem("email") === values.email &&
        localStorage.getItem("password") === values.password
      ) {
        navigate("/home");
      } else {
        alert("Please sign in first");
      }
    },
  });

  return (
    <div className="login main-container">
      <form onSubmit={formik.handleSubmit} className="sign-up-form">
        <h3>
          Welcome to <span>Property</span>!
        </h3>
        <input
          type="email"
          placeholder="Your email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="input-element"
        />
        <p className="error">
          {formik.errors.email && formik.touched.email && formik.errors.email}
        </p>
        <div className="input">
          <input
            type={icon ? "text" : "password"}
            placeholder="Password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            style={{ marginTop: "0px" }}
            className="input-element"
          />
          {icon ? (
            <VscEye className="icon" onClick={() => setIcon(false)} />
          ) : (
            <VscEyeClosed className="icon" onClick={() => setIcon(true)} />
          )}
        </div>
        <p className="error">
          {formik.errors.password &&
            formik.touched.password &&
            formik.errors.password}
        </p>
        <button type="submit" className="signup-button">
          Log in
        </button>
        <p>
          Don’t have an account? Create a
          <span onClick={() => navigate("/signup")}> new account.</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
