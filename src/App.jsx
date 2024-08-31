import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import LikesBtn from "./pages/LikesBtn";

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
          <Link to="/" className="link-unstyled">
            <h1 className="navbar-brand"> /Router</h1>
          </Link>
          <button className=" btn" onClick={toggleTheme}>
            <i className={`fa fa-${theme === "dark" ? "sun" : "moon"}`}></i>
          </button>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/likesbtn" element={<LikesBtn />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
