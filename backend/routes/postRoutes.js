// routes/postRoutes.js

const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);
// Protected route for creating a new post
router.post("/create", postController.createPost);

// Protected route for updating a post
router.put("/:postId", postController.updatePost);

// Protected route for deleting a post
router.delete("/:postId", postController.deletePost);

// Public route for fetching all posts (doesn't require authentication)
router.get("/", postController.getAllPosts);

// get post of logged in user
router.get("/myPosts", postController.getMyPosts);

// Public route for fetching a single post by ID (doesn't require authentication)
router.get("/:postId", postController.getPostById);

// get all posts of a user
router.get("/user/:userId", postController.getPostsByUserId);

module.exports = router;
