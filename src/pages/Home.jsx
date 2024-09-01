import { Link } from "react-router-dom";
import routes from "./routes";
export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div className="row ">
        {routes.map((route, index) => {
          return (
            <div className="col-4 my-2" key={index}>
              <Link
                className="link-reset text-bg-secondary p-2 "
                to={route.path}
              >
                {route.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
