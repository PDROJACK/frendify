import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import Home from "./reusables/Home";
import Clickable from "./reusables/Clickable";
import { ReactComponent as Twitch } from "../assets/twitch.svg";
import { ReactComponent as Youtube } from "../assets/youtube.svg";
import { ReactComponent as Pinterest } from "../assets/pinterest.svg";
import { ReactComponent as Spotify } from "../assets/spotify.svg";
import axios from "axios";
import config from "../config";
import { Link } from "react-router-dom";

const {SPOTIFY} = config[process.env.NODE_ENV];



function Profile(props) {
  
  const [profile, setProfile] = useState();
  const [profileStatus, setProfileStatus] = useState(false);
  
  useEffect(() => {
    const access_token =  localStorage.getItem("token");
    
    const fetchData= async ()=> {
      
      let res = await axios.get(`${SPOTIFY}/me`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json; charset=utf-8",
        },
      });
      
      const data = {
        display_name: res.data.display_name,
        profile: res.data.images,
      }
      console.log(data);
      setProfile(data);
      setProfileStatus(true);
    }
    
    fetchData();
    
    
  }, [])
  
  
  const ProfileContent = () => {
    return (
      <div style={{ display: "grid", alignItems: "center" }}>
        <div
          style={{
            width: "50.5rem",
            height: "36.5rem",
            margin: "5rem 10rem 10rem 10rem",
            borderRadius: "10px",
            textAlign: "center",
            padding: "3rem 3rem 1rem 0rem",
            zIndex: 1000,
            backgroundColor: "#96ccf1",
            boxShadow: "10px 10px 8px #888888",
            position: "absolute",
          }}
          >
            <h4 style={{fontWeight: "bold", marginLeft: "50px"}}>PROFILE</h4>
          {
            profileStatus ?
            <>
            <img src={profile.profile[0].url}  width="100px" height="100px" style={{ borderRadius: "50px", marginLeft: "50px" }}/>
            <h2
            style={{
              color: "white",
              // backgroundColor: "green",
              marginLeft: "50px",
              fontWeight: "bold",
            }}
            >
            {profile.display_name}
          </h2>
          </>
          : null
        }



          <h5 style={{marginLeft: "50px"}}>Accounts Connected with Frendify</h5>
          <Clickable text={"Spotify"} logo={<Spotify style={{ width: "30px", height: "30px" }}/>} />
          <Clickable text={"Youtube"} logo={<Youtube style={{ width: "30px", height: "30px" }}/>} />
          <Clickable text={"Twitch"} logo={<Twitch style={{ width: "30px", height: "30px" }}/>} />
          <Clickable text={"Pinterest"} logo={<Pinterest style={{ width: "30px", height: "30px" }}/>} />
          <Link to={`/chat?access_token=${localStorage.getItem("token")}`}>
          <Clickable text={"Go Back"} />
          </Link>

          
        </div>
      </div>
    );
  };
  return (
    <>
      <Home childComponent={<ProfileContent />} />
    </>
  );
}

export default Profile;
