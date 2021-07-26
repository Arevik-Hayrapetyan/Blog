import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({

});

export default function CreatePost() {
  const classes = useStyles();
  return (
    <form style={{ display: "block" }}>
      <h1>Tell us your story...</h1>
      <div>
        <TextField
          id="outlined"
          label="Title*"
          variant="outlined"
          placeholder="title..."
          autoFocus
        />
      </div>
      <div>
        <TextField
          id="outlined"
          label="Content*"
          variant="outlined"
          placeholder="Write your post..."
        />
      </div>
    </form>
  );
}
