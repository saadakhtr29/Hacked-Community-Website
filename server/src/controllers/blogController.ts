import express from "express";
import type { Request, Response } from "express";
import { BlogService } from "../services/blogService";

export class BlogController {
  static async getAllPosts(req: Request, res: Response) {
    try {
      const hashnodeUsername = process.env.HASHNODE_USERNAME || "your-hashnode-username";
      const mediumUsername = process.env.MEDIUM_USERNAME || "your-medium-username";

      const posts = await BlogService.getAllPosts(hashnodeUsername, mediumUsername);

      res.status(200).json(posts);
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  }
}
