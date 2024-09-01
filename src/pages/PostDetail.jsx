import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PostDetail() {
  const [post, setPost] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const { id } = useParams();
  React.useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:3002/api/posts/${id}`);
        setPost(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-bg-danger py-2">{error.message}</div>;

  return (
    <div className="container">
      <h2>{post.author}</h2>
      <div className="d-flex align-items-center justify-content-start gap-3">
        <span>{post.title}</span>
        <span className={`${post.isLiked ? "fas" : "far"} fa-heart`}></span>
      </div>
      <p>{post.body}</p>
    </div>
  );
}
