const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentControllers");
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);
// Route for adding a comment to a post
router.post("/:postId", commentController.addComment);

// Route for getting all comments for a post
router.get("/:postId", commentController.getCommentsByPost);

// Route for deleting a comment
router.delete("/:commentId", commentController.deleteComment);

module.exports = router;
