import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import emailjs from "emailjs-com";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


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

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await emailjs.send(
        "service_rb23ccx", // Your EmailJS Service ID
        "template_ybmf1qd", // Your EmailJS Template ID
        {
          name: values.name,
          email: values.email,
          message: values.message,
        },
        "FjnoGd26TgnnRvYtg" // Your EmailJS Public Key (User ID)
      );
      console.log("Email sent successfully!");
      resetForm();
      // Optionally, show a success message or redirect the user
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle error (e.g., show error message)
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={classes.form}>
              <Typography variant="h5" className={classes.heading}>
                Contact me...
              </Typography>
              <Field
                as={InputField}
                fullWidth
                label="Name"
                variant="outlined"
                inputProps={{ className: classes.input }}
                name="name"
                className={classes.field}
              />
              <ErrorMessage name="name" component="div" className={classes.error} />
              <Field
                as={InputField}
                fullWidth
                label="Email"
                variant="outlined"
                inputProps={{ className: classes.input }}
                name="email"
                className={classes.field}
              />
              <ErrorMessage name="email" component="div" className={classes.error} />
              <Field
                as={InputField}
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                inputProps={{ className: classes.input }}
                name="message"
                className={classes.field}
              />
              <ErrorMessage name="message" component="div" className={classes.error} />
              <Button
                type="submit"
                variant="outlined"
                fullWidth
                endIcon={<Send />}
                className={classes.button}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Contact Me'}
              </Button>
            </Form>
          )}
        </Formik>
      </Grid>
    </Box>
  );
};

export default Contact;
