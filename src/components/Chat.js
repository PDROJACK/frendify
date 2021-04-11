import React, { Component } from "react";
// import { io } from "socket.io-client";
import axios from "axios";
import querystring from "query-string";
import config from "../config";
import MainChatWindow from "../components/MainChatWindow";
import { Row, Col } from "reactstrap";
import { io } from "socket.io-client";
import Sidebar from "./Sidebar";
import { connectSocket } from "../service/socket";
import Profile from "./Profile";
import InfoPage from "./InfoPage";

let { SPOTIFY, SOCKET } = config[process.env.NODE_ENV];

export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profilePopup: true,
      ready: false,
    };
  }

  async componentDidMount() {
    let { access_token } = querystring.parse(window.location.search);

    // Set token to localstorage
    localStorage.setItem("token", access_token);

    // GET user info and set state

    let res = await axios.get(`${SPOTIFY}/me`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    let res2 = await axios.get(`${SPOTIFY}/me/player`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    // console.log(res2);
    if (res2.status === 200) {
      this.setState({ ready: true });

      const socket = io(SOCKET, { autoConnect: false });

      let newState = {
        trackId: res2.data.item.id,
        trackName: res2.data.item.name,
        trackDuration: res2.data.item.duration_ms,
        display_name: res.data.display_name,
        id: res.data.id,
        profile: res.data.images,
      };
      // console.log(socket.auth)
      // socket.connect();
      // socket.auth = { ...newState };

      connectSocket(newState);
      this.setState({ ...newState, socket });
    }
    // console.log(this.state);

    // socket.on("users", (users) => {
    //     users.forEach((user) => {
    //       user.self = user.userID === socket.id;
    //       initReactiveProperties(user);
    //     });
    //     // put the current user first, and then sort by username
    //     this.users = users.sort((a, b) => {
    //       if (a.self) return -1;
    //       if (b.self) return 1;
    //       if (a.username < b.username) return -1;
    //       return a.username > b.username ? 1 : 0;
    //     });
    //   });
  }

  render() {
    return this.state.ready ? (
      <div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              height: "100vh",
              width: "250px",
              backgroundColor: "#FB4A9B",
            }}
          >
            {this.state.trackId ? <Sidebar details={this.state} /> : null}
          </div>
          <div style={{ height: "100vh", width: "1590px" }}>
            <MainChatWindow
              trackId={this.state.trackId}
              display_name={this.state.display_name}
              id={this.state.id}
              title={this.state.trackName}
            />
          </div>
        </div>
      </div>
    ) : (
      <InfoPage />
    );
  }
}
