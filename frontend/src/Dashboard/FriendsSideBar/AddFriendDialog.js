import React, { useEffect, useState } from "react";
import { validateMail } from "./../../shared/utils/Validators";
import { Button, Dialog, DialogActions, DialogContentText, DialogTitle, DialogContent, Typography } from "@mui/material";
import CustomPrimaryButton from './../../shared/components/CustomPrimaryButton';
import { InputWithLabel } from './../../shared/components/InputWithLabel';

const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {},
}) => {
  const [mail, setMail] = useState("");
  const [isFormValid, setIsFormValid] = useState("");

  const handleSendInvitation = () => {
    //send frieend request to server
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail("");
  };

  useEffect(() => {
    setIsFormValid(validateMail(mail));
  }, [mail, setIsFormValid]);

  return <div>
    <Dialog open={isDialogOpen}
    onClose={closeDialogHandler}
    >
   <DialogTitle>
    <Typography>Invite a Friend</Typography>
    </DialogTitle> 
    <DialogContent>
    <Typography>Enter e-mail address of friend which you would like to invite</Typography>
    <InputWithLabel 
    label="Mail"
    type="text"
    value={mail}
    setValue={setMail}
    Placeholder="Enter mail address"

    />
      </DialogContent> 
    <CustomPrimaryButton 
    label="invite"
   onClick={handleSendInvitation}
   disabled={!isFormValid}
   additionalStyles={{
    width:"90%",
    margin:"auto",
    marginBottom:"20px",
   }}

    />
    </Dialog>
  </div>;
};

export default AddFriendDialog;
