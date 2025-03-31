import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RightArrow from '../../components/SVG';
import SingleBlogTwo from '../../components/Blog/SingleBlogTwo';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://agstest.online/public/api/web-fetch-recent-blogs');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        // Take only the first 3 blogs
        setBlogs(data.blog.slice(0, 3));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-center py-5">Loading blogs...</div>;
  }

  if (error) {
    return <div className="text-center py-5 text-danger">Error: {error}</div>;
  }

  return (
    <div
      id="it-blog"
      className="it-blog-area it-blog-style-3 it-blog-style-4 ed-blog-style-2 pt-120 pb-90"
    >
      <div className="container">
        <div className="it-blog-title-wrap mb-60">
          <div className="row align-items-end">
            <div className="col-xl-8 col-lg-8 col-md-8">
              <div className="it-blog-title-box">
                <span className="ed-section-subtitle"> BLOG</span>
                <h4 className="ed-section-title">
                Recent Blogs
                </h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="it-blog-button text-start text-md-end">
                <Link className="ed-btn-square dark" to="/blog-1">
                  <span>
                    View All Blog
                    <RightArrow />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className="col-xl-4 col-lg-4 col-md-4 mb-30 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay={`${0.3 + index * 0.2}s`}
            >
              <SingleBlogTwo
                blogImage={`https://aia.in.net/assets/images/blog/${blog.blog_banner}`}
                blogAlt={blog.blog_alt}
                title={blog.blog_header}
                description={blog.blog_des}
                authorName="AGS Admin"
                publishedDate={new Date(blog.blog_date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
                btnClass="ed-btn-square orange sm"
                hasArrow
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;