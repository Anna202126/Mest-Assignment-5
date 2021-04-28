const express = require("express");
const app = express();
const dbConnect = require("./config/dbConnect");

dbConnect();

app.use(express.json());

app.use("/posts", require("./routes/postRouter"));

app.listen(4000, () => console.log("App running on port 4000"));
