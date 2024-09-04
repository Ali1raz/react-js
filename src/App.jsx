import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./components/styles.css";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import Posts from "./pages/Posts";
import LikesBtn from "./pages/LikesBtn";
import PostDetail from "./pages/PostDetail";
import Tabs from "./pages/tabs";

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
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/likesbtn" element={<LikesBtn />} />
          <Route path="/tabs" element={<Tabs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
