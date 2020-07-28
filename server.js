const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const axios = require("axios");

const app = express();
// const db = require("./models");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//! API testing
app.get("", (req, res) => {
    axios.get("")
      .then(response => {
        res.json();
      })
      .catch(e => console.log(e));
})

//! Connect to Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/books-search", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

//! serve static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./build'));
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, './build/index.html')));
} else {
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, './client/public/index.html'))
    })
}

app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`)
});