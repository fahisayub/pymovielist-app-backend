const express = require("express");
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT;
const { connection } = require("./config/db.config");
const { movieRouter } = require("./routes/movie.route");
const { detailsRouter } = require("./routes/details.route");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<div><h1>Welcome to the pymovie Backend!</h1> <h2>APIs</h2> <div><a href='/movies/get'>/movies/get</a></div>  <div><a href='/details/:id'>/details/:id</a></div> </div>");
});

app.use("/movies", movieRouter);
app.use("/details", detailsRouter);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected To MongoDB");
  } catch (e) {
    console.log(404, "Couldn't connect");
  }
  console.log(`listening on port ${PORT}`);
});
