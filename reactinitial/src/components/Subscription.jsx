import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import LoadingMask from "./LoadingMask";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

function Subscription({ useData, setUseData, setShowSubcription }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  // const [submitMessage, setSubmitMessage] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const newEmail = () => {
    setLoading(true);
    fetch("https://demoapi.com/api/series/newsletter", {
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      setLoading(false);
      handleClickOpen();
      setTimeout(() => {
        setShowSubcription(false);
      }, 5000);
    });
  };

  return (
    <div>
      <h1>Subscribe to our newsletter</h1>

      <TextField
        variant='outlined'
        label='Subscribe'
        type='email'
        name='email'
        placeholder='type your e-mail address here'
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <Button
        variant='contained'
        type='submit'
        disabled={!(email.includes("@") && email.includes("."))}
        // When the form is sent, there should be a loading animation, this time in <Subscription /> form. The button and the input field should disappear.

        onClick={() => {
          newEmail();
        }}
      >
        Send
      </Button>

      {loading && <LoadingMask />}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{"Subscribed"}</DialogTitle>
      </Dialog>
    </div>
  );
}

export default Subscription;
