import { Outlet, NavLink } from "react-router-dom";
import routes from "./routes";

export default function Nav() {
  return (
    <div className="container-md mb-2 d-flex">
      <span className="me-2">Go to</span>
      {routes.map((r) => (
        <div className="d-flex gap-2" key={r.id}>
          <span>&gt;</span>
          <NavLink
            className="link-reset me-3 "
            to={`${r.path}`}
            style={({ isActive }) => {
              return {
                borderBottom: isActive
                  ? "2px solid red"
                  : "2px solid transparent",
              };
            }}
          >
            {r.title}
          </NavLink>
        </div>
      ))}
      <Outlet />
    </div>
  );
}
