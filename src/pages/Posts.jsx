import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import Loading from "../components/Loading";
import "../components/styles.css";
import axios from "axios";

export default function Posts() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const filterLiked = searchParams.get("show");

  const displayedPosts = filterLiked
    ? posts.filter((p) => p.isLiked === true)
    : posts;

  React.useEffect(() => {
    const f = async () => {
      try {
        const res = await axios.get("http://localhost:3002/api/posts/");
        setPosts(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    f();
  }, []);

  function ColorSpan({ color, size = 40 }) {
    return (
      <span
        style={{
          background: color,
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "50%",
        }}
      ></span>
    );
  }

  if (loading) return <Loading />;
  if (error) return <div className="text-danger">Error: {error.message}</div>;

  return (
    <div className="container">
      <div className="d-flex justify-content-between pe-2">
        <h3 className="my-2">Posts - {displayedPosts.length}</h3>
        <div>
          <button
            className="btn btn-outline"
            onClick={() => setSearchParams({ show: "liked" })}
          >
            <span className="fas fa-heart text-danger"></span>
          </button>
          {filterLiked && (
            <button
              className="btn btn-outline"
              onClick={() => setSearchParams({})}
            >
              <span className="fa fa-close"></span>
            </button>
          )}
        </div>
      </div>
      {displayedPosts.map((post) => (
        <div className="" key={post.id}>
          <div className="d-flex gap-3 my-2 border-bottom border-secondary">
            <ColorSpan color={post.color} />
            <div className="d-flex flex-column justify-content-start">
              <Link className="link-reset" to={`/posts/${post.id}`}>
                <span className="fw-bold">{`${post.author} - ${post.title}`}</span>
                <div>{post.body}</div>
              </Link>
              <div className="d-flex justify-content-between mt-2 mb-1">
                <span
                  className={`${
                    post.isLiked ? "text-danger fas" : "far"
                  } fa-heart`}
                ></span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
