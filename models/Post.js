const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please enter the post title"],
    minLength: 4,
    maxLength: 20,
  },
  body: {
    type: String,
    require: [true, "Please provide the body of the post"],
    minLength: 4,
  },
});

const Post = model("Post", postSchema);

module.exports = Post;
