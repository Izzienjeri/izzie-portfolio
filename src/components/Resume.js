import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "black",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid white",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid white",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tan tan transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tan tan",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#black",
    background: "white",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tan",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tan",
  },
  subtitle1: {
    color: "white",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2022 
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            
Supervisor and Customer Service Specialist
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Teleperformance Greece, Remote
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            I led a team of customer service representatives, improving team efficiency by 20% through effective training programs. I also developed engaging content, trained new team members in company policies, and managed a team of 30 German-speaking agents, ensuring high-quality work within budget constraints
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2023
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Software Engineer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Upwork, Remote 
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            As a part-time Software Engineer at Upwork since January 2023, I specialize in creating captivating frontend experiences using tools like React.js, Next.js, and Material UI, ensuring visually stunning and intuitive user interfaces. Leveraging Flask, Node.js, and PostgreSQL, I also build robust backend systems for smooth data management and seamless API integrations. My design skills with Tailwind CSS and Material UI enhance usability and engagement, resulting in complete web solutions from concept to deployment tailored to unique needs.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2023
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Auditor and Customer Service Representative
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          Invisible Technologies, United States, Remote 
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
           As an Auditor and German Customer Service Representative from February 2023 to January 2024, I undertook various responsibilities, including transcribing menus for different companies, cold calling merchants from different countries to maintain clear records as instructed by clients, and auditing my colleagues' work to ensure quality standards were upheld.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2024
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Advanced AI Data Trainer - Software Development
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
           Invisible Technologies, United States, Remote 
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            As an Advanced AI Trainer in Software Development, I specialize in optimizing AI performance by delving into intricate backend codes, analyzing diverse subject matter to discern facts, context, and behavioral patterns in AI interactions, and continuously evaluating AI performance against established criteria and training methods. I also assess the accuracy of factual outputs and proficiency in interpretation, actively test AI by inducing errors to refine and improve recovery mechanisms, document encountered issues, and recommend enhancements to training methods. My role plays a vital part in ensuring AI safety, accuracy, and effectiveness in critical applications.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
