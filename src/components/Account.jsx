import React, { useContext } from "react";
import Header from "./Header";
import { MyContext } from "../utils/MyContextProvider";
import useImagesMap from "../utils/useImagesMap";

const Account = () => {
  const { bookedRooms } = useContext(MyContext);
  const imagesMap = useImagesMap();
  return (
    <>
      <Header />
      <main>
        <h1>My Profile</h1>
        <section className="booked-rooms">
          <h2>Booked Rooms</h2>
          {bookedRooms?.length > 0 ? (
            <>
              {bookedRooms?.map((room) => (
                <article className="room-list">
                  <div>
                    <img src={imagesMap[room.image]} alt={room.title} />
                  </div>
                  <h4>{room.title}</h4>
                </article>
              ))}
            </>
          ) : (
            <p>No rooms booked.</p>
          )}
        </section>
      </main>
    </>
  );
};

export default Account;
