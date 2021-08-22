import axios from "axios";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [userInput, setUserInput] = useState({
    login: "",
    password: "",
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => {
              setUserInput({ ...userInput, login: e.target.value });
              console.log(userInput);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => {
              setUserInput({ ...userInput, password: e.target.value });
              console.log(userInput);
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Link to="/customer">
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => {
                console.log(userInput);
                axios
                  .post("http://localhost:7000/api/token", userInput)
                  .then((response) => {
                    localStorage.setItem("token", response.data);
                  });
              }}
            >
              Sign In
            </Button>
          </Link>
        </form>
      </div>
    </Container>
  );
}

// export default function Main() {
//   const [userId, setUserId] = useState("");

//   return (
//     <div>
//       <Link to="/worker">
//         <button
//           onClick={() => {
//             axios
//               .post("http://localhost:7000/api/token", {
//                 id: 1,
//               })
//               .then((response) => localStorage.setItem("token", response.data));
//           }}
//         >
//           Worker
//         </button>
//       </Link>
//       <input
//         onChange={(e) => {
//           setUserId(e.target.value);
//           console.log(userId);
//         }}
//       ></input>
//       <Link to="/customer">
//         <button
//           onClick={() => {
//             axios
//               .post("http://localhost:7000/api/token", {
//                 id: userId,
//               })
//               .then((response) => localStorage.setItem("token", response.data));
//             console.log(userId);
//           }}
//         >
//           Customer
//         </button>
//       </Link>
//     </div>
//   );
// }
