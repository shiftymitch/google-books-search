const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const axios = require("axios");

const db = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

//! api routes

// search Google Books API
app.get("/api/books/:title", (req, res) => {
  axios.get("https://www.googleapis.com/books/v1/volumes?q="
    + req.params.title
    + "&key="
    + process.env.GOOGLE_API_KEY)
      .then(response => {
        res.json(response.data.items);
      })
      .catch(e => console.log(e));
})

app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./build/index.html"));
  });
} else {
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
}

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
