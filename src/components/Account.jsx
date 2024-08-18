import React, { useContext } from "react";
import Header from "./Header";
import { MyContext } from "../utils/MyContextProvider";
import useImagesMap from "../utils/useImagesMap";
import Footer from "./Footer";
import booking from "../assets/images/bookings.svg";

const Account = () => {
  const { bookedRooms } = useContext(MyContext);
  const imagesMap = useImagesMap();
  return (
    <>
      <Header />
      <main>
        <h2 style={{ marginBottom: "12px" }}>My Profile</h2>
        <hr />
        <section className="booked-rooms">
          <div className="articles-container">
            <div className="article">
              <h4>
                Name:
                <span>
                  {" "}
                  {localStorage.getItem("fullname") !== null
                    ? localStorage.getItem("fullname")
                    : "------------"}
                </span>
              </h4>
            </div>
            <div className="article">
              <h4>
                Password:
                <span>
                  {" "}
                  {localStorage.getItem("email") !== null
                    ? localStorage.getItem("email")
                    : "------------"}
                </span>
              </h4>
            </div>
            <div className="article">
              <h4>
                Email:
                <span>
                  {" "}
                  {localStorage.getItem("password") !== null
                    ? localStorage.getItem("password")
                    : "------------"}
                </span>
              </h4>
            </div>
            {/* <article className="article">
              <h4>
                Card No:
                <e> </e>
              </h4>
            </article> */}
          </div>
          <hr />
          <h2 style={{ marginTop: "14px" }}>Booked Rooms</h2>
          {bookedRooms?.length > 0 ? (
            <div className="booked-rooms-container">
              {bookedRooms?.map((room) => (
                // <article className="room-list" key={room.id}>
                //   <div>
                //     <div className="account-image-container">
                //       <img src={imagesMap[room.image]} alt={room.title} />
                //     </div>
                //     <div className="room-details-container">
                //       <h6>{room.title.split(" ")[0]}</h6>
                //       <e>{room.location}</e>
                //       <e>&#x20B9;{room.price}</e>
                //     </div>
                //   </div>
                //   <p>
                //     Booked Date: <span>{room.roomBookedDate}</span>
                //   </p>
                // </article>
                <section key={room.id} className="cart-container" id="room-list">
                  <div className="cart-image-container" id="booking-image-container">
                    <img
                      src={imagesMap[room.image]}
                      alt={room.title}
                      className="cart-image"
                      id="booking-image"
                    />
                  </div>
                  <div className="cart-title-container">
                    <h3>{room.title}</h3>

                    <p className="cart-price">
                      location: <span>{room.location}</span>
                    </p>
                    <p className="cart-price">
                      Price: <span>&#x20B9;{room.price}</span>
                    </p>
                    <p className="cart-price">
                      Booked Date:<span>{room.roomBookedDate}</span>
                    </p>
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <div
              id="no-rooms-booking"
              className="empty-property-message"
              // style={{ height: `${emptyRoomsHeight}px` }}
            >
              <div>
                <img src={booking} alt="No Bookings" className="error-image" />
              </div>
              <p>No rooms booked.</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Account;
