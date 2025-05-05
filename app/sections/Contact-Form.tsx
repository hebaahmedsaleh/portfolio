import { useEffect, useState } from "react";
import contactImg from "../../assets/images/contact-img.svg";
import Image from "next/image";

import {
  Container,
  TextField,
  Box,
  Grid,
  Button,
  TextareaAutosize,
} from "@mui/material";

import { useForm, ValidationError } from "@formspree/react";
import "./Contact-Form.css";

// Define form state type
interface FormDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const Contact : React.FC = () => {
  const formInitialDetails: FormDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [buttonText, setButtonText] = useState("Send");

  // formspree project code
  const [state, handleSubmit] = useForm("mvgkdkje");

  const cancelCourse = () => {
    document?.getElementById("Form")?.reset();
  };

  useEffect(() => {
    if (state.succeeded) {
      console.log("Form succeeded:", state.succeeded);
      setButtonText("Sent");
      cancelCourse();
    }
    console.log({ state });
  }, [state.succeeded]);

  return (
    <Container>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6}>
          <Image
            width={500}
            height={500}
            src={contactImg}
            alt="contact-illustrator"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <h2>Get In Touch</h2>
          <form onSubmit={handleSubmit} id="Form">
            <Box display="grid" gridTemplateColumns="repeat(2, 1fr)">
              <Box p={2} pb={1}>
                <TextField
                  fullWidth
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                />
              </Box>

              <Box p={2} pb={1}>
                <TextField
                  fullWidth
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                />
              </Box>

              <Box p={2} pb={1}>
                <TextField
                  fullWidth
                  required
                  id="email"
                  name="email"
                  label="Email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </Box>

              <Box p={2} pb={1}>
                <TextField
                  fullWidth
                  required
                  id="phone"
                  name="phone"
                  label="Phone Number"
                />
              </Box>
            </Box>

            <Box p={2}>
              <TextareaAutosize
                id="message"
                name="message"
                aria-label="Message"
                minRows={5}
                placeholder="write your message here."
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                  fontFamily: "inherit",
                  resize: "vertical",
                }}
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </Box>

            <Box p={2}>
            <Button type="submit" variant="contained" color="primary" disabled={state.submitting}> <span>{buttonText}</span> </Button>

            </Box>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
