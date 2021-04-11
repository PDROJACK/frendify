import axios from "axios";
import { Component } from "react";
import config from "../config";
import { Container } from "reactstrap";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
// import 'primeflex/primeflex.css';
import Logo from "../assets/logo-w.png";
import "./home.css";
import Home from "./reusables/Home";

const MainLogo = () => {
  return (
    <div style={{ display: "grid", alignItems: "center" }}>
    <div
      style={{
        width: "24.5rem",
        height: "36.5rem",
        margin: "0rem 10rem 10rem 10rem",
        borderRadius: "3px",
        textAlign: "center",
        padding: "5rem 3rem 1rem 0rem",
        zIndex: 1000,
        position: "absolute",
      }}
    >
      <img
        src={Logo}
        alt="logo"
        style={{ width: "45rem", height: "30rem" }}
      ></img>

      {/* <div className="mt-5"> */}
      <a href={`${config[process.env.NODE_ENV].BACKEND}login`}>
        <Button
          className="p-button-raised p-button-rounded"
          style={{
            width: "25rem",
            marginLeft: "11rem",
            backgroundColor: "white",
            color: "black",
            justifyContent: "center",
          }}
        >
          Login with spotify
        </Button>
      </a>

      {/* </div> */}
    </div>
  </div>
  );
};

export default class Landing extends Component {
  render() {
    return (
      <>
        <Home childComponent={<MainLogo/>} />
      </>
    );
  }
}
