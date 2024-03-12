import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import { Button } from "@mui/material";
 


 const MainPageButton = () => {
  return (
    <Button
    style={{
        height: "48px",
      width: "48px", 
      borderRadius: "16px",
      margin: 0,
      fontSize:"medium",
      padding: 0,
      minWidth: 0,
      marginTop: "10px",
      color: "white",
      backgroundColor: "#5865f2",
      
    }}
  >
    <GroupsIcon />
  </Button>
  )
}

export default MainPageButton;

 