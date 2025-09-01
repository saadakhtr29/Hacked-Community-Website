import React from 'react';
import { ArrowRight, Clock, User, Calendar } from 'lucide-react';
import '../style/Blogs.css';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Future of Web Development: What to Expect in 2025',
      excerpt: 'Exploring emerging trends, frameworks, and technologies that will shape the web development landscape.',
      author: 'Alex Chen',
      date: '2025-08-25',
      readTime: '5 min read',
      category: 'Web Development',
      image: '/placeholder.svg'
    },
    {
      title: 'Building Scalable APIs with Node.js and TypeScript',
      excerpt: 'A comprehensive guide to creating robust, maintainable APIs using modern JavaScript technologies.',
      author: 'Sarah Johnson',
      date: '2025-08-20',
      readTime: '8 min read',
      category: 'Backend',
      image: '/placeholder.svg'
    },
    {
      title: 'Machine Learning for Beginners: Your First Steps',
      excerpt: 'Demystifying ML concepts and providing a practical roadmap for newcomers to the field.',
      author: 'Raj Patel',
      date: '2025-08-15',
      readTime: '6 min read',
      category: 'AI/ML',
      image: '/placeholder.svg'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="blog-section">
      <h2 className="blog-title font-display scroll-animation">
        Latest from Our Blog
      </h2>
      
      <p className="blog-subtitle scroll-animation">
        Insights, tutorials, and stories from our community of tech innovators.
      </p>

      {/* Blog Posts Grid */}
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <article
            key={post.title}
            className="blog-card scroll-animation card-hover"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Post Image */}
            <div className="blog-image">📝</div>

            <div className="blog-content">
              {/* Category Badge */}
              <div className="category-badge">
                {post.category}
              </div>

              <h3 className="blog-post-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>

              {/* Post Meta */}
              <div className="blog-meta">
                <div className="meta-item">
                  <User size={14} />
                  <span>{post.author}</span>
                </div>
                
                <div className="meta-item">
                  <Calendar size={14} />
                  <span>{formatDate(post.date)}</span>
                </div>
                
                <div className="meta-item">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Read More Link */}
              <a href="#" className="read-more-link">
                Read More <ArrowRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* View All Posts Button */}
      <div className="scroll-animation">
        <button className="view-all-btn">
          View All Posts
        </button>
      </div>

      {/* Newsletter Signup */}
      <div className="newsletter-section scroll-animation">
        <h3 className="newsletter-title">Stay Updated</h3>
        <p className="newsletter-subtitle">
          Get the latest posts and community updates delivered to your inbox.
        </p>

        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="form-input"
          />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
