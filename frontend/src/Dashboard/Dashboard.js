import React, { useEffect } from "react";
import { styled } from "@mui/system";
import SideBar from "./SideBar/SideBar";
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";
import { connect } from "react-redux";
import { getActions } from "../store/actions/authActions";
import { logout } from "../shared/utils/auth";

import {connectWithSocketServer} from "../realtimeCommunication/socketConnection"

const Wrapper = styled("div")({
  height: "100vh",
  width: "100%",
  display: "flex",
});

const Dashboard = ({ setUserDetails }) => {
  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    //const tokenExpiration = localStorage.getItem("tokenExpiration");

    // if (!userDetails || !tokenExpiration || Date.now() > tokenExpiration) {
     if (!userDetails) {
      logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
      connectWithSocketServer(JSON.parse(userDetails));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

const mapToActionToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapToActionToProps)(Dashboard);
