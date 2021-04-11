import React from "react";
import Home from "./reusables/Home";

const Info = () => {
  return (
    <div style={{ display: "grid", alignItems: "center" }}>
      <div
        style={{
          width: "50.5rem",
          height: "36.5rem",
        //   margin: "0rem 10rem 10rem 10rem",
          borderRadius: "3px",
          textAlign: "center",
          padding: "5rem 3rem 1rem 0rem",
          zIndex: 1000,
        //   backgroundColor: "green",

          position: "absolute",
        }}
      >
        <h2
          style={{
            color: "white",
            // backgroundColor: "green",
            marginLeft: "300px",
            fontWeight: "bold",
          }}
        >
          Please Play a song on spotify to meet new people
        </h2>

        {/* </div> */}
      </div>
    </div>
  );
};
function InfoPage() {
  return (
    <>
      <Home childComponent={<Info />} />
    </>
  );
}

export default InfoPage;
