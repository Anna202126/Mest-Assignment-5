const mongoose = require("mongoose");

async function dbConnect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/AnnBlog", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Connected successfully");
  } catch (err) {
    console.log(err);
  }
}

module.exports = dbConnect;
