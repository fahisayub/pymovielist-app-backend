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
  res.send("Welcome to the Backend!");
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
