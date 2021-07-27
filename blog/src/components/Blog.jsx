import React from "react";
import { getItems } from "../helpers/localStorage";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = (theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    textAlign:"left"
    
  },
});

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleContents: getItems("titleContents"),
     
    };
  }
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <h1>Posts:</h1>

          {this.state.titleContents.map((item) => (
            <div className="" key={item.id}>
              <Typography className={classes.pos} color="black" >
             < AccountCircleIcon fontSize="large" />
              {item.postDate} by  {item.name.toUpperCase()}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Title 
                <br/>
                {item.title}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
               Content
               <br/>
                {item.content}
              </Typography>
              <CardActions>
          <Button size="small"  color="secondary">Learn More</Button>
        </CardActions>
            </div>
          ))}
          <br/>
        </CardContent>
        <br/>
      </Card>
      
    );
    
  }
}

export default withStyles(useStyles)(Blog);

// class Blog extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       titleContents: getItems("titleContents")
//     }
//   }
//   render(){
//     return (
// //   <div>
// // <div>

// {this.state.titleContents.map((item) => (
//   <div className = "" key = {item.id} >
//     <span>
//       {item.title}
//       {item.content}
//     </span>
//   </div>
// ))}

// // </div>

// //   </div>
//     )
// }
// }
