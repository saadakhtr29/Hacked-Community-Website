"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const axios_1 = __importDefault(require("axios"));
class BlogService {
    static async getHashnodePosts(username) {
        try {
            const query = `
        query {
          user(username: "${username}") {
            publication {
              posts {
                title
                brief
                slug
                coverImage
                dateAdded
              }
            }
          }
        }
      `;
            const response = await axios_1.default.post("https://gql.hashnode.com", { query });
            return (response.data.data.user?.publication?.posts.map((post) => ({
                title: post.title,
                description: post.brief,
                url: `https://${username}.hashnode.dev/${post.slug}`,
                coverImage: post.coverImage,
                publishedAt: post.dateAdded,
                source: "Hashnode",
            })) || []);
        }
        catch (error) {
            console.error("Error fetching Hashnode posts:", error);
            return [];
        }
    }
    static async getMediumPosts(username) {
        try {
            const response = await axios_1.default.get(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`);
            return (response.data.items.map((item) => ({
                title: item.title,
                description: item.description,
                url: item.link,
                coverImage: item.thumbnail,
                publishedAt: item.pubDate,
                source: "Medium",
            })) || []);
        }
        catch (error) {
            console.error("Error fetching Medium posts:", error);
            return [];
        }
    }
    static async getAllPosts(hashnodeUsername, mediumUsername) {
        const [hashnodePosts, mediumPosts] = await Promise.all([
            this.getHashnodePosts(hashnodeUsername),
            this.getMediumPosts(mediumUsername),
        ]);
        return [...hashnodePosts, ...mediumPosts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    }
}
exports.BlogService = BlogService;
//# sourceMappingURL=blogService.js.map