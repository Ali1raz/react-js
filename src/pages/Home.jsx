import { Link } from "react-router-dom";
import routes from "./routes";

export default function Home() {
  return (
    <div className="container-lg">
      <h2>Home</h2>
      <div className="row w-100 justify-content-center">
        {routes.map((route, index) => {
          return (
            <Link
              className="col-sm-4 col-md-3 col-lg-2 text-center link-reset text-bg-secondary p-2 mx-1 my-2"
              to={route.path}
              key={index}
            >
              <div className="w-100">{route.title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
