import React from "react";
import { useRef } from "react";
import "./ContactSection.css";
import { Textarea, Button, Input } from "@mui/joy";
import emailjs from "emailjs-com";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const ContactSection = () => {
  const form = useRef();

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState("success")
  const [snackMessage, setSnackMessage] = React.useState("Your message was sent")

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const sendEmail = () => {
    event.preventDefault();

    emailjs.sendForm(
        "service_ynlubpn",
        "template_wf1uf8k",
        form.current,
        "yU0MqwAPF86Ek1ej0"
    ).then((result) => {
        console.log(result.text);
        setSeverity("success");
        setSnackMessage("Your message was sent!")
        setOpen(true);
        form.current.reset();
    }, (error) => {
        console.log(error.text);
        setSeverity("error");
        setSnackMessage("Error sending message")
        setOpen(true);
    })
  };

  return (
    <div className="ContactSectionContainer">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {snackMessage}
        </Alert>
      </Snackbar>
      <div className="ContactHeader">
        Let's <span className="customColor customFont">talk</span>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <Input
          placeholder="Your name"
          name="from_name"
          sx={{
            width: "40vw",
            minWidth: "320px",
            margin: "10px",
            boxShadow: "box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
          }}
        />
        <Input
          placeholder="Your email here"
          name="email"
          sx={{
            width: "40vw",
            minWidth: "320px",
            margin: "10px",
            boxShadow: "box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
          }}
        />
        <Textarea
          placeholder="message..."
          name="message"
          sx={{
            width: "40vw",
            minWidth: "320px",
            margin: "10px",
            boxShadow: "box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
          }}
          minRows={6}
        />
        <Button
          type="sumbit"
          sx={{
            margin: "10px",
            width: "80px",
          }}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default ContactSection;
