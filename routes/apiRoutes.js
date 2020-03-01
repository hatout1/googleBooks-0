const express = require("express");
const router = express.Router();

const db = require("../models");
const axios = require("axios");

router.post("/search", (req, res) => {
  let bookTitle = req.body.title.replace(" ", "+");
  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=AIzaSyAYBgHuNo9RKvzKmrZjKlGwDax08USydL0`
    )
    .then(response => {
      res.json(response.data.items);
    })
    .catch(err => {
      res.json({ error: error });
    });
});

router.get("/api/books", (req, res) => {
  db.Book.find()
    .then(booksData => {
      res.json(booksData);
    })
    .catch(err => {
      res.json({ error: err });
    });
});

router.post("/api/books", (req, res) => {
  db.Book.create(req.body)
    .then(response => {
      res.json({ successful: response });
    })
    .catch(err => {
      res.json({ error: err });
    });
});

router.delete("/api/books/:id", (req, res) => {
  db.Book.findByIdAndDelete(req.params.id)
    .then(response => {
      res.json({ successful: response });
    })
    .catch(err => {
      rres.json({ error: err });
    });
});

module.exports = router;
