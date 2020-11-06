const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Blog = require('../../models/Blog');
const User = require('../../models/User');

// @route POST api/blogs
// @desc Create a post
// @access Private
router.post('/', 
    [
        auth,
        [
            check('text', 'Text is required')
                .not()
                .isEmpty()
        ]
    ], 
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty){
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const user = await User.findById(req.user.id).select('-password');

            const newBlog = new Blog({
                text: req.body.text,
                name: user.name,
                user: req.user.id
            });

            const blog = await newBlog.save();
            res.json(blog);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
        
    }
);

// @route GET api/blogs
// @desc Get all posts
// @access Public
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ date: -1 });
        res.json({ blogs: blogs });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;