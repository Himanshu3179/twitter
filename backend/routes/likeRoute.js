const express = require("express");
const router = express.Router();
const likeController = require("../controllers/likeController");
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);

// Route to like a post
router.post("/like/:postId", likeController.addLike);

// Route to remove a like from a post
router.delete("/like/:postId", likeController.removeLike);

// Route to dislike a post
router.post("/dislike/:postId", likeController.addDislike);

// Route to remove a dislike from a post
router.delete("/dislike/:postId", likeController.removeDislike);

module.exports = router;
