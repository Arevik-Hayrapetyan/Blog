import React from "react";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { setItems, getItems } from "..//helpers/localStorage";
import { date, time } from "../data/data";
import { Routes } from "../constants/routes";

const useStyles = (theme) => ({
  wrapper: {
    height: "350px",
    marginLeft: "25%",
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    backgroundColor: "#9da3b51a",
  },

  title: {
    width: "300%",
    margin: theme.spacing(3, 0, 2),
  },

  titleWidth: {
    width: "25%",
  },

  content: {
    width: "300%",
    margin: theme.spacing(3, 0, 2),
  },

  contentWidth: {
    width: "25%",
  },

  addButtonsize: {
    width: "10%",
    height: "20%",
  },
});

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: Math.random(),
      title: "",
      content: "",
      isAdd: false,
      titleContents:
        getItems("titleContents") === null ? [] : getItems("titleContents"),
    };
  }

  handleTitle = (event) => {
    setItems("title", event.target.value);
    this.setState({ title: event.target.value });
  };

  handleContent = (event) => {
    setItems("content", event.target.value);
    this.setState({ content: event.target.value });
  };

  handleAdd = (event) => {
    this.setState((prevState) => {
      return {
        titleContents: [
          ...prevState.titleContents,
          {
            title: this.state.title,
            content: this.state.content,
            id: Math.random(),
            name: getItems("name"),
            date: date,
            time: time,
          },
        ],
      };
    });
    this.setState({ isAdd: true });
  };

  componentDidUpdate() {
    setItems("titleContents", this.state.titleContents);
  }

  render() {
    if (this.state.isAdd) {
      return <Redirect to={Routes.blog().path} />;
    }

    const { classes } = this.props;

    return (
      <form className={classes.wrapper}>
        <h1>Tell us your story...</h1>
        <div className={classes.title}>
          <TextField
            onChange={this.handleTitle}
            className={classes.titleWidth}
            id="outlined"
            label="Title*"
            placeholder="title..."
            autoFocus
          />
        </div>

        <div className={classes.content}>
          <TextField
            onChange={this.handleContent}
            multiline
            rows={4}
            className={classes.contentWidth}
            id="outlined"
            label="Content*"
            placeholder="Write your post..."
          />
        </div>

        <Button>
          <AddCircleIcon
            className={classes.addButtonsize}
            onClick={this.handleAdd}
          />
        </Button>
      </form>
    );
  }
}

export default withStyles(useStyles)(CreatePost);
