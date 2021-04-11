import React, { useEffect, useState } from "react";
import Chat, { Bubble, useMessages } from "@chatui/core";
import config from "../config";
import { sendMessage, subscribeToChat } from "../service/socket";
import "@chatui/core/dist/index.css";
import "./sideBar.css";
import { Row, Col, Media, Container } from "reactstrap";
import { ReactComponent as ProfileIcon } from "../assets/boy.svg";
import Controls from "./Controls";
import backend from "../api/backend";
import { Link } from "react-router-dom";
// import {ReactComponent as Previous} from '../assets/previous.svg';


const data = [
  {
    name: "david gilmour",
    id: 1,
    uri: "spotify:user:7ozvre5g7h6seahj9npmpdjqj",
  },
  {
    name: "roger gilmour",
    id: 2,
    uri: "spotify:user:7ozvre5g7h6seahj9npmpdjqj",
  },
  {
    name: "barret gilmour",
    id: 3,
    uri: "spotify:user:7ozvre5g7h6seahj9npmpdjqj",
  },
  {
    name: "barret gilmour",
    id: 4,
    uri: "spotify:user:7ozvre5g7h6seahj9npmpdjqj",
  },
  {
    name: "barret gilmour",
    id: 5,
    uri: "spotify:user:7ozvre5g7h6seahj9npmpdjqj",
  },
  {
    name: "barret gilmour",
    id: 6,
    uri: "spotify:user:7ozvre5g7h6seahj9npmpdjqj",
  },
];
export default function Sidebar(props) {
  const [people, setPeople] = useState();
  // console.log(props);

  useEffect(() => {
    let trackId = props.details.trackId;
    // console.log(trackId)
    const fetchData = async () => {
      // console.log(props.details.trackId)
      const res = await backend.get("/chat/peeps", {
        params: {
          trackId: trackId
        },
      });

      // console.log(res.data);
      if(res.data){
        setPeople(res.data.users);
      }
    };

    fetchData();
    // console.log(fetchData());
    
  },[]);

  const listOfPeople = (peeps) => {
    // console.log(peeps);
    return peeps.map((peep) => {
      console.log(peep);
      let uri = `https://open.spotify.com/follow/1/?uri=spotify:user:${peep}&size=detail&theme=light`;

      return (
        <li
          key={peep.id}
          style={{
            padding: "6px 4px 4px 4px",
            color: "black",
            backgroundColor: "#F8CD4F",
            margin: "5px 5px 0px 5px",
            height: "85px",
            borderRadius: "5px",
          }}
        >
          <iframe
            src={uri}
            width="250"
            height="55"
            scrolling="no"
            frameBorder="0"
            style={{ border: "none", overflow: "hidden", color: "red" }}
            allowtransparency="true"
          ></iframe>
        </li>
      );
    });
  };

  return (
    <div>
      {/* <Container >     */}
      <div>
        <ul>
          {/* MY NAME */}
          <li
            key={420}
            style={{
              color: "black",
              backgroundColor: "#A0E7E5",
              height: "100px",
              cursor: "pointer",
            }}
            onClick={() => console.log("profile")}
          >
            <h4 style={{ paddingLeft: "60px" }}>Welcome !</h4>
            <Link to="/profile">
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <ProfileIcon style={{ width: "30px", height: "30px" }} />
              <h3>{props.details.display_name}</h3>
            </div>
            </Link>
          </li>

          {/* LIST OF PEOPLE IN THIS ROOM */}
          <div
            style={{
              height: "650px",
              overflow: "scroll",
              backgroundColor: "#FC979D",
              scrollbarWidth: "none",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                marginLeft: "60px",
                marginTop: "10px",
              }}
            >
              Jam Together !
            </p>
            {people ? listOfPeople(people):null}
          </div>

          {/* Controls to handle player */}
          <Controls details={props.details} />
        </ul>
      </div>
      {/* </Container> */}
    </div>
  );
}
