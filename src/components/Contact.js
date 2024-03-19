import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "black",
    height: "100vh",
  },
  heading: {
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "white",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rb23ccx", // Your EmailJS Service ID
        "template_ybmf1qd", // Your EmailJS Template ID
        e.target,
        "FjnoGd26TgnnRvYtg" // Your EmailJS Public Key (User ID)
      )
      .then(
        (result) => {
          console.log(result.text);
          // Reset form fields or show success message
        },
        (error) => {
          console.log(error.text);
          // Handle error (e.g., show error message)
        }
      );
  };

  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <form className={classes.form} onSubmit={handleSubmit}>
          <Typography variant="h5" className={classes.heading}>
            Contact me...
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ className: classes.input }}
            name="name" // Add name attribute for form submission
          />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.field}
            name="email" // Add name attribute for form submission
          />
          <InputField
            fullWidth={true}
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            inputProps={{ className: classes.input }}
            name="message" 
          />
          <Button
            type="submit"
            variant="outlined"
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
          >
            Contact Me
          </Button>
        </form>
      </Grid>
    </Box>
  );
};

export default Contact;
