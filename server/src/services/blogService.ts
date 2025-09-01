import axios from "axios";

export class BlogService {
  static async getHashnodePosts(username: string) {
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

      const response = await axios.post("https://gql.hashnode.com", { query });

      return (
        response.data.data.user?.publication?.posts.map((post: any) => ({
          title: post.title,
          description: post.brief,
          url: `https://${username}.hashnode.dev/${post.slug}`,
          coverImage: post.coverImage,
          publishedAt: post.dateAdded,
          source: "Hashnode",
        })) || []
      );
    } catch (error) {
      console.error("Error fetching Hashnode posts:", error);
      return [];
    }
  }

  static async getMediumPosts(username: string) {
    try {
      const response = await axios.get(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`
      );

      return (
        response.data.items.map((item: any) => ({
          title: item.title,
          description: item.description,
          url: item.link,
          coverImage: item.thumbnail,
          publishedAt: item.pubDate,
          source: "Medium",
        })) || []
      );
    } catch (error) {
      console.error("Error fetching Medium posts:", error);
      return [];
    }
  }

  static async getAllPosts(hashnodeUsername: string, mediumUsername: string) {
    const [hashnodePosts, mediumPosts] = await Promise.all([
      this.getHashnodePosts(hashnodeUsername),
      this.getMediumPosts(mediumUsername),
    ]);

    return [...hashnodePosts, ...mediumPosts].sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }
}
