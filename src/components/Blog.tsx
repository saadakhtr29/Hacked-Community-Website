
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Coding: What to Expect in 2025',
      date: 'March 25, 2025',
      author: 'Alex Johnson',
      excerpt: 'As we move further into the decade, coding practices continue to evolve at a rapid pace. In this post, we explore the upcoming trends that will shape the development landscape.',
      category: 'Technology',
      imageUrl: '/placeholder.svg',
    },
    {
      id: 2,
      title: 'How Our Last Hackathon Changed Lives',
      date: 'March 18, 2025',
      author: 'Samantha Williams',
      excerpt: 'The impact of community-driven innovation can be profound. Here\'s how solutions from our recent hackathon are making a difference in our community.',
      category: 'Community',
      imageUrl: '/placeholder.svg',
    },
    {
      id: 3,
      title: 'Getting Started with Quantum Computing',
      date: 'March 10, 2025',
      author: 'David Chen',
      excerpt: 'Quantum computing might seem intimidating, but this beginner-friendly guide will help you understand the basics and how you can start exploring this exciting field.',
      category: 'Education',
      imageUrl: '/placeholder.svg',
    },
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold mb-4 text-center">Latest from Our Blog</h2>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Stay updated with the latest trends, insights, and stories from our community
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div 
            key={post.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg animate-fade-in"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-hacked-red font-semibold">{post.category}</span>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-hacked-black">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">By {post.author}</span>
                <a 
                  href="#" 
                  className="text-hacked-red font-medium flex items-center hover:underline"
                >
                  Read More <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a 
          href="#"
          className="inline-block border-2 border-hacked-black px-6 py-3 rounded-md font-semibold hover:bg-hacked-black hover:text-white transition-colors"
        >
          View All Posts
        </a>
      </div>
    </div>
  );
};

export default Blog;
