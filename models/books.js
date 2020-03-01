const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String
  },
  saved: {
    type: Boolean,
    default: false
  }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
