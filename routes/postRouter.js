const express = require("express");
const { findByIdAndUpdate, findByIdAndDelete } = require("../models/Post");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async function (req, res) {
  let posts;
  try {
    posts = await Post.find();
  } catch (err) {
    res.status(200).json({ err: "Cannot fetch posts" });
    return;
  }

  return res.status(200).json({ posts });
});

router.post("/create-post", async function (req, res) {
  let post;
  const { title, body } = req.body;

  if (!title || !body) {
    return res.status(403).json({ err: "All fields are required" });
  }

  try {
    post = await Post.create({
      title,
      body,
    });
    res.status(201).json({ post });
    return;
  } catch (err) {
    res.status(403).json({ err: "Cannot create post" });
  }
});

router.patch("/:id/update", async function (req, res) {
  const postId = req.params.id;

  const post = await Post.find({ _id: postId });

  if (post) {
    const updatedPost = await Post.findByIdAndUpdate({ _id: postId }, req.body);
    res.status(201).json({ updatedPost });
    return;
  } else {
    res.status(403).json({ err: "No post found" });
    return;
  }
});

router.delete("/:id", async function (req, res) {
  const postId = req.params.id;

  const post = await Post.find({ _id: postId });

  if (post) {
    const response = await Post.findByIdAndDelete({ _id: postId });
    res.status(201).json({ response });
    return;
  } else {
    res.status(403).json({ err: "No post found" });
    return;
  }
});

module.exports = router;
