const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const { validatePost } = require("../validation/postValidation");

router.get("/", postController.getAllPosts);
router.get("/:id", postController.getPostById);
router.post("/", validatePost, postController.createPost);
router.put("/:id", validatePost, postController.updatePost);
router.delete("/:id", postController.deletePost);
router.post("/:id/comments", postController.addComment);

module.exports = router;