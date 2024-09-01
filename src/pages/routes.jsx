import Home from "./Home";
import Posts from "./Posts";
import PostDetail from "./PostDetail";
import LikesBtn from "./LikesBtn";

const routes = [
  { path: "/", element: Home, title: "Home" },
  { path: "/posts", element: Posts, title: "Posts" },
  { path: "/likesbtn", element: LikesBtn, title: "Like Buttons" },
];

export default routes;
