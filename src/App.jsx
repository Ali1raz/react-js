import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./components/styles.css";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import Posts from "./pages/Posts";
import LikesBtn from "./pages/LikesBtn";
import PostDetail from "./pages/PostDetail";
import Tabs from "./pages/tabs";
import AboutReact from "./pages/Tabs/React";
import AboutNode from "./pages/Tabs/Node";
import AboutExpress from "./pages/Tabs/Express";

export default function App() {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "dark"
  );

  React.useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
    console.log(`fa-${theme === "dark" ? "sun" : "moon"}`);
  };

  return (
    <BrowserRouter>
      <div className="app container-md">
        <nav className="navbar bg-body-tertiary px-4">
          <Link to="/" className="link-reset">
            <h1 className="navbar-brand"> /Router</h1>
          </Link>
          <button className=" btn" onClick={toggleTheme}>
            <i className={`fa fa-${theme === "dark" ? "sun" : "moon"}`}></i>
          </button>
        </nav>
        <Nav />

        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="posts" element={<Posts />} />
            <Route path="posts/:id" element={<PostDetail />} />
            <Route path="likesbtn" element={<LikesBtn />} />

            <Route path="/tabs" element={<Tabs />}>
              <Route index element={<AboutReact />}></Route>
              <Route path="node" element={<AboutNode />}></Route>
              <Route path="express" element={<AboutExpress />}></Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
