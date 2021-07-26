import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleIcon from '@material-ui/icons/AddCircle';


const useStyles = makeStyles((theme) => ({
  wrapper:{
    height:"350px",
    marginLeft:"25%",
     marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    backgroundColor: "#9da3b51a"
  },
  title: {
    width:"300%",
    margin: theme.spacing(3, 0, 2),
  },
  titleWidth:{
    width: "25%"
  },
  content:{
    width:"300%",
    margin: theme.spacing(3, 0, 2),
   
  
  
  },

contentWidth:{
  width:"25%",
  height:"50%"
  

  
},
addButtonsize:{
  width:"10%",
  height:"20%"
}

}))


export default function CreatePost() {
  const classes = useStyles();
  return (
    <form  className={classes.wrapper}>
      <h1>Tell us your story...</h1>
      <div className={classes.title}>
        <TextField
        className={classes.titleWidth}
          id="outlined"
          label="Title*"
          placeholder="title..."
          autoFocus
        />
      </div>
      <div className={classes.content} >
        <TextField
        className={classes.contentWidth}
          id="outlined"
          label="Content*"
          placeholder="Write your post..."
        />
      </div>
      <Button ><AddCircleIcon className={classes.addButtonsize}/></Button>
    </form>
  );
}
