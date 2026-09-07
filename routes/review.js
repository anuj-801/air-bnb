const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing");
const {
  validateReview,
  isLoggedIn,
  isRevivewAuthor,
} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

// Post review route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview),
);

// Delete review route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isRevivewAuthor,
  wrapAsync(reviewController.destroyReview),
);

module.exports = router;
