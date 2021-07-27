import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { setItems, getItems } from "..//helpers/localStorage";
import { isValidName, isValidPassword } from "../helpers/validation";

const useStyles = (theme) => ({
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
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: typeof getItems("name") !== "undefined" ? getItems("name") : "",
      password:
        typeof getItems("password") !== "undefined" ? getItems("password") : "",
      isValidName: false,
      isValidPassword: false,

      nameError: "",
      passwordError: "",
      errorMessage: "",
    };
  }

 

  handleName = (event) => {
    setItems("name", event.target.value);
    this.setState({ name: event.target.value });
    const isValid = isValidName(this.state.name);
    if (isValid) {
      this.setState({ isValidName: true });
      this.setState({ nameError: "" });
    } else {
      this.setState({ isValidName: false });
      this.setState({ nameError: "Wrong name" });
    }
  };

  handlePassword = (event) => {
    setItems("password", event.target.value)
    this.setState({ password: event.target.value });
    const isValid = isValidPassword(this.state.password);
    if (isValid) {
      this.setState({ isValidPassword: true });
      this.setState({ passwordError: "" });
    } else {
      this.setState({ isValidPassword: false });
      this.setState({ passwordError: "Wrong password" });
    }
  };

  handleLogin = () => {
    if (isValidName && isValidPassword) {
      this.setState({ errorMessage: "Congrats you are Login successfully" });
    } else {
      this.setState({ errorMessage: "Please try again" });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <form className={classes.form}>
            <TextField
              onChange={this.handleName}
              variant="outlined"
              margin="normal"
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
            />
            <span>{this.state.nameError}</span>
            <TextField
              onChange={this.handlePassword}
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <span color="red">{this.state.passwordError}</span>

            <Button
              onClick={this.handleLogin}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log In
            </Button>
            <span>{this.state.errorMessage}</span>
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
    );
  }
}
export default withStyles(useStyles)(Login);
