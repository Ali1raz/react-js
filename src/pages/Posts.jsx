import React from "react";
import { Link } from "react-router-dom";
import "../components/styles.css";
import axios from "axios";

export default function Posts() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-danger">Error: {error.message}</div>;

  return (
    <div className="container">
      <h3>Posts - {posts.length}</h3>
      {posts.map((post) => (
        <Link className="text-reset link-reset" to={`/posts/${post.id}`}>
          <div
            className="d-flex gap-3 my-2 border-bottom border-secondary"
            key={post.id}
          >
            <ColorSpan color={post.color} />
            <div className="d-flex flex-column justify-content-start">
              <span className="fw-bold">{`${post.author} - ${post.title}`}</span>
              <div>{post.body}</div>
              <div className="d-flex justify-content-between mt-2">
                <span
                  className={`${post.isLiked ? "fas" : "far"} fa-heart`}
                ></span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
