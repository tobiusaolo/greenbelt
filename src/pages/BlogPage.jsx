import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const API_URL = 'https://greenbeltblog-v336.onrender.com/posts';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${API_URL}?status=published`);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Blog - GreenBelt</title>
        <meta name="description" content="Read our latest updates, stories, and news." />
      </Helmet>
      <div className="page-header bg-primary text-white" style={{ paddingTop: '120px', paddingBottom: '60px', textAlign: 'center', backgroundColor: 'var(--primary)' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'white' }}>Our Blog</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.9 }}>
          Discover the latest stories, news, and insights from the GreenBelt community.
        </p>
      </div>

      <div className="container" style={{ padding: '4rem 0' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem' }}>Loading posts...</div>
        ) : posts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--gray-600)' }}>
            No blog posts published yet. Check back soon!
          </div>
        ) : (
          <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {posts.map((post) => {
              const displayImg = post.cover_image || post.image;
              return (
                <div key={post.id} className="blog-card" style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', transition: 'transform 0.3s ease' }}>
                  <div style={{ position: 'relative' }}>
                    {displayImg ? (
                      <img src={displayImg} alt={post.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ width: '100%', height: '220px', backgroundColor: 'var(--gray-200)' }} />
                    )}
                    {post.category && (
                      <span style={{ 
                        position: 'absolute', 
                        top: '1rem', 
                        left: '1rem', 
                        backgroundColor: 'var(--primary)', 
                        color: 'white', 
                        padding: '0.4rem 0.8rem', 
                        borderRadius: '20px', 
                        fontSize: '0.75rem', 
                        fontWeight: 600,
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                      }}>
                        {post.category}
                      </span>
                    )}
                  </div>
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--gray-600)', marginBottom: '0.5rem' }}>
                      {new Date(post.created_at).toLocaleDateString()} • By {post.author}
                    </div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--black)', lineHeight: 1.3 }}>{post.title}</h3>
                    <p style={{ color: 'var(--gray-700)', marginBottom: '1.5rem', flex: 1, lineHeight: 1.6, fontSize: '0.95rem' }}>{post.summary}</p>
                    <Link to={`/blog/${post.id}`} className="btn btn-outline" style={{ textAlign: 'center', marginTop: 'auto', borderRadius: '8px' }}>
                      Read Article
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default BlogPage;
