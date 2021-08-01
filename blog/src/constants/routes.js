import Blog from "../components/Blog";
import CreatePost from "../components/CreatePost";
import Login from "../components/Login";
import ErrorPage from "../components/ErrorPage";
import { homeButton } from "./bottomButton";
import { postButton } from "./bottomButton";
import { loginButton } from "./bottomButton";

export const Routes = {
  blog: () => ({ path: "/", text: homeButton, component: Blog }),
  create_post: () => ({
    path: "/post",
    text: postButton,
    component: CreatePost,
  }),
  login: () => ({ path: "/login", text: loginButton, component: Login }),
  error: () => ({ path: "*", text: "", component: ErrorPage }),
};
