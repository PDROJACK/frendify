import React from "react";

function Clickable(props) {
  return (
    // <span>
    <div
      style={{
        display: "flex",
        borderWidth: "10px",
        borderColor: "black",
        marginLeft: "320px",
        marginTop: "10px",
        marginBottom: "10px",
        borderRadius: "5px",
        backgroundColor: "#f5d0b5",
        width: "180px",
        justifyContent: "space-evenly",
        height: "40px",
        padding: "5px"
      }}
    >
      {props.logo ? props.logo : null}
      <h6 style={{marginTop: "5px"}}>{props.text}</h6>
    </div>
    // </span>
  );
}

export default Clickable;
