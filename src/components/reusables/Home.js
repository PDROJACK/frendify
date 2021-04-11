
import { Component } from "react";
import config from "../../config";
import { Container } from "reactstrap";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
// import 'primeflex/primeflex.css';
import Logo from "../../assets/logo-w.png";
import "../home.css";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <>
            {this.props.childComponent}

          {/* ANIMATION */}
          <div className="waveWrapper waveAnimation">
            <div className="waveWrapperInner bgTop">
              <div
                className="wave waveTop"
                style={{
                  backgroundImage:
                    "url(" +
                    "http://front-end-noobs.com/jecko/img/wave-top.png" +
                    ")",
                }}
              ></div>
            </div>
            <div className="waveWrapperInner bgMiddle">
              <div
                className="wave waveMiddle"
                style={{
                  backgroundImage:
                    "url(" +
                    "http://front-end-noobs.com/jecko/img/wave-mid.png" +
                    ")",
                }}
              ></div>
            </div>
            <div className="waveWrapperInner bgBottom">
              <div
                className="wave waveBottom"
                style={{
                  backgroundImage:
                    "url(" +
                    "http://front-end-noobs.com/jecko/img/wave-bot.png" +
                    ")",
                }}
              ></div>
            </div>
          </div>
        </>
      </Container>
    );
  }
}
