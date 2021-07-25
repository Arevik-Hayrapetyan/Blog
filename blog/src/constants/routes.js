import Blog from "../components/Blog";
import CreatePost from "../components/CreatePost";
import Login from "../components/Login";
import { homeButton } from "./bottomButton";
import { postButton } from "./bottomButton";
import { loginButton } from "./bottomButton";

export const Routes = {
  Blog: () => ({ url: "/", text: homeButton, component: Blog }),
  CreatePost: () => ({ url: "/post", text: postButton, component: CreatePost }),
  Login: () => ({ url: "/login", text: loginButton, component: Login }),
};
