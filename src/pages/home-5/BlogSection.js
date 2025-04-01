import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RightArrow from '../../components/SVG';
import SectionTitle from '../../components/SectionTitle';

import shapeImg1 from '../../assets/img/event/ed-shape-3-1.png';
import shapeImg2 from '../../assets/img/event/ed-shape-3-2.png';
import titleImg from '../../assets/img/category/title.svg';
import BaseUrl, { ImageBlog } from '../../utils/BaseUrl';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${BaseUrl}/api/web-fetch-recent-blogs`);
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
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
      className="it-event-2-area it-event-style-4 p-relative z-index pt-115 fix pb-70 grey-bg"
    >
      <div className="ed-event-shape-1">
        <img src={shapeImg1} alt="" />
      </div>
      <div className="ed-event-shape-2">
        <img src={shapeImg2} alt="" />
      </div>
      <div className="container">
        <div className="it-event-2-title-wrap mb-60">
          <div className="row align-items-end">
            <div className="col-12">
              <SectionTitle
                itemClass="it-event-2-title-box text-center"
                subTitleClass="it-section-subtitle-5 purple-2"
                subTitle="BLOG"
                titleClass="it-section-title-3"
                title="Recent Blogs"
                titleImage={titleImg}
              />
            </div>
          </div>
        </div>
        <div className="row">
          {blogs.map((blog, index) => {
            const publishedDate = new Date(blog.blog_date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });
            
            return (
              <div
                key={blog.id}
                className="col-xl-4 col-lg-4 col-md-6 mb-30 wow animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay={`${0.3 + index * 0.2}s`}
              >
                <div className="it-event-2-item-box">
                  <div className="it-event-2-item">
                    <div className="it-event-2-thumb fix">
                      <Link to="#">
                        <img 
                          src={`${ImageBlog}/${blog.blog_banner}`} 
                          alt={blog.blog_alt} 
                          style={{ height: '250px', width: '100%', objectFit: 'cover' }}
                        />
                      </Link>
                    </div>
                    <div className="it-event-2-content">
                      <h4 className="it-event-2-title">
                        <Link to="#">
                          {blog.blog_header}
                        </Link>
                      </h4>
                      <div className="it-event-2-text">
                        <p className="mb-0 pb-10">
                          {blog.blog_des.length > 150 
                            ? `${blog.blog_des.substring(0, 150)}...` 
                            : blog.blog_des}
                        </p>
                      </div>
                      <div className="it-event-2-meta">
                        <span>
                          <i className="fa-light fa-calendar-days"></i>
                          {publishedDate}
                        </span>
                        <span>
                          <Link to="#"
                           className="read-more-link ed-course-btn">
                            Read more <RightArrow />
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;