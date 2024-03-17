import React from "react";
import { styled } from "@mui/system";
import PendingInvitationsLisItem from "./PendingInvitationsLisItem";

const dummy_invitation = [
  {
    _id: "1",
    senderID: {
      username: "Mark",
      mail: "dumy1@gmail.com",
    },
  },
  {
    _id: "2",
    senderID: {
      username: "John",
      mail: "dumy2@gmail.com",
    },
  },
];

const MainContainer = styled("dev")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});

const PendingInvitationsList = () => {
  return (
    <MainContainer>
      {dummy_invitation.map((invitation) => (
        <PendingInvitationsLisItem
          id={invitation._id}
          key={invitation._id}
          username={invitation.senderID.username}
          mail={invitation.senderID.mail}
        />
      ))}
    </MainContainer>
  );
};

export default PendingInvitationsList;
