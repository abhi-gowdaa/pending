import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/alertActions";

export const AlertNotification = ({
  showAlertMessage,
  closeAlertMessage,
  alertMessageContent,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={showAlertMessage}
      onClose={closeAlertMessage}
      autoHideDuration={6000}
      >
     
      <Alert severity="info">{alertMessageContent}</Alert>
    </Snackbar>
  );
};
const mapStoreStateToProps = ({ alert }) => {
  return {
    ...alert,
  };
};

const mapActionToProps = (dispatch) => {
  return getActions(dispatch);
};


export default connect(
  mapStoreStateToProps,
  mapActionToProps
)(AlertNotification);

