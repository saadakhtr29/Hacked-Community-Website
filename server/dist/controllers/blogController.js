"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogController = void 0;
const blogService_1 = require("../services/blogService");
class BlogController {
    static async getAllPosts(req, res) {
        try {
            const hashnodeUsername = process.env.HASHNODE_USERNAME || "your-hashnode-username";
            const mediumUsername = process.env.MEDIUM_USERNAME || "your-medium-username";
            const posts = await blogService_1.BlogService.getAllPosts(hashnodeUsername, mediumUsername);
            res.status(200).json(posts);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to fetch blog posts" });
        }
    }
}
exports.BlogController = BlogController;
//# sourceMappingURL=blogController.js.map