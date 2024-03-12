import React from "react";
import { styled } from "@mui/material";
import FriendsListItem from "./FriendsListItem";

const dummy_list = [
  { id: 1, username: "max", isOnline: true },
  {
    id: 2,
    username: "anna",
    isOnline: true,
  },
  {
    id: 3,
    username: "john",
    isOnline: false,
  },
];

const MainComponent = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const FriendsList = () => {
  return (
    <MainComponent>
      {dummy_list.map((f) => (
        <FriendsListItem
          username={f.username}
          id={f.id}
          key={f.id}
          isOnline={f.isOnline}
        />
      ))}
    </MainComponent>
  );
};

export default FriendsList;
