import express from "express";
import cors from "cors";
import { posts } from "./constants/posts.mjs";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  console.log(`${req.method} - ${req.baseUrl}`);
  res.send({ msg: "Welcome to the API" });
});

app.get("/api/posts", (req, res) => {
  console.log(`${req.method} - ${req.baseUrl}`);
  res.send(posts);
});

app.get("/api/posts/:id", (req, res) => {
  console.log(`${req.method} - ${req.baseUrl}`);
  const {
    params: { id },
  } = req;

  const postId = parseInt(id);

  if (isNaN(postId)) return res.status(400).send({ msg: "bad request" });

  const f = posts.find((post) => post.id === postId);
  if (!f) return res.status(404).send({ msg: "post not found" });

  res.send(f);
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`server is listening on port: ${PORT}`);
});
