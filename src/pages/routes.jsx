import Home from "./Home";
import Posts from "./Posts";
import Tabs from "./tabs";
import LikesBtn from "./LikesBtn";

const routes = [
  { path: "/", element: Home, title: "Home" },
  { path: "/posts", element: Posts, title: "Posts" },
  { path: "/likesbtn", element: LikesBtn, title: "Like Buttons" },
  { path: "/tabs", element: Tabs, title: "Tabs" },
];

export default routes;
