import { NavLink, Outlet } from "react-router-dom";

export default function Tabs() {
  return (
    <>
      <div className="d-flex gap-3 ">
        <NavLink
          to="/tabs"
          end
          className={({ isActive }) => (isActive ? "fw-bold" : null)}
        >
          React JS
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "fw-bold" : null)}
          to="node"
        >
          Node JS
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "fw-bold" : null)}
          to="express"
        >
          Express JS
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}
