const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

// Load Book model
const Book = require("../models/Book");

// Shop page
router.get("/shop", (req, res) => {
  Book.find({})
    .then((books) => res.render("shop", { books }))
    .catch((err) => console.log(err));
});

// Add product page
router.get("/add", ensureAuthenticated, (req, res) =>
  res.render("add_product")
);

// Add product handle
router.post("/add", ensureAuthenticated, (req, res) => {
  const { title, description, price, image } = req.body;
  let errors = [];

  if (!title || !price) {
    errors.push({ msg: "Please enter all required fields" });
  }

  if (errors.length > 0) {
    res.render("add_product", { errors, title, description, price, image });
  } else {
    const newBook = new Book({ title, description, price, image });

    newBook
      .save()
      .then(() => {
        req.flash("success_msg", "Product added successfully");
        res.redirect("/books/shop");
      })
      .catch((err) => console.log(err));
  }
});

// Buy page
router.get("/buy/:id", ensureAuthenticated, (req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.render("buy", { book }))
    .catch((err) => console.log(err));
});

// Buy handle
router.post("/buy/:id", ensureAuthenticated, (req, res) => {
  // Implement purchase logic here
  req.flash("success_msg", "Purchase successful");
  res.redirect("/books/shop");
});

module.exports = router;
