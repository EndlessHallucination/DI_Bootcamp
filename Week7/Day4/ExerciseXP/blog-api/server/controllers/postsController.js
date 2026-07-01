const postsModel = require("../models/postsModel");

const getPosts = async (req, res) => {
    try {
        const posts = await postsModel.getAllPosts();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getPost = async (req, res) => {
    try {
        const post = await postsModel.getPostById(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Post not found",
            });
        }

        res.json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;

        const post = await postsModel.createPost(title, content);

        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updatePost = async (req, res) => {
    try {
        const { title, content } = req.body;

        const post = await postsModel.updatePost(
            req.params.id,
            title,
            content
        );

        if (!post) {
            return res.status(404).json({
                message: "Post not found",
            });
        }

        res.json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deletePost = async (req, res) => {
    try {
        const post = await postsModel.deletePost(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Post not found",
            });
        }

        res.json({
            message: "Post deleted successfully",
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
};