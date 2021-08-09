import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import PostAddIcon from "@material-ui/icons/PostAdd";

export const homeButton = (
  <Button color="primary" style={{ flex: 3 }}>
    <HomeIcon color="primary" value="Home" fontSize="large" />
    Blog
  </Button>
);

export const postButton = (
  <Button color="primary" style={{ flex: 1 }}>
    <PostAddIcon color="primary" value="Home" fontSize="large" />
    Create Post
  </Button>
);

export const loginButton = (
  <Button color="primary" style={{ flex: 1 }}>
    <LockOpenIcon color="primary" value="Login" fontSize="large" />
    Login
  </Button>
);
