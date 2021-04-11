import React from "react";
import { ReactComponent as Playbutton } from "../assets/play-button.svg";
import { ReactComponent as Previous } from "../assets/previous.svg";
import { ReactComponent as Next } from "../assets/next.svg";

function Controls(props) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          padding: "30px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Previous
            style={{ width: "40px", height: "40px", cursor: "pointer" }}
            onClick={() => console.log("hello")}
          />
        </div>

        <div>
          <Playbutton
            style={{ width: "40px", height: "40px", cursor: "pointer" }}
            onClick={() => console.log("hello")}
          />
        </div>

        <div>
          <Next
            style={{ width: "40px", height: "40px", cursor: "pointer" }}
            onClick={() => console.log("hello")}
          />
        </div>
      </div>

      {/* Current song */}
      <div style={{ marginLeft: "50px" }}>
        <h5>You are listening to</h5>
      </div>

      <div style={{ marginLeft: "100px", color: "yellow", overflow: "hidden" }}>
        <p>{props.details.trackName}</p>
      </div>
    </div>
  );
}

export default Controls;
