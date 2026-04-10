import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';

const API_URL = 'https://greenbeltblog-v336.onrender.com/posts';

const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchPost();
    window.scrollTo(0, 0);
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      if (!response.ok) throw new Error('Post not found');
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ width: '40px', height: '40px', border: '3px solid var(--gray-200)', borderTopColor: 'var(--primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <p style={{ color: 'var(--gray-600)', fontWeight: 500 }}>Preparing editorial...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div style={{ padding: '10rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Document Not Found</h2>
        <p style={{ color: 'var(--gray-600)', marginBottom: '2rem' }}>The requested article has been moved or removed from our archives.</p>
        <Link to="/blog" className="btn btn-primary">Browse All Articles</Link>
      </div>
    );
  }

  const coverImg = post.cover_image || post.image;
  // Calculate reading time (approx 200 words per minute)
  const wordCount = post.blocks ? post.blocks.reduce((acc, b) => acc + (b.value ? b.value.split(' ').length : 0), 0) : 0;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <div style={{ backgroundColor: 'var(--white)', minHeight: '100vh', paddingBottom: '8rem' }}>
      <Helmet>
        <title>{post.title} | GreenBelt Journal</title>
        <meta name="description" content={post.summary} />
      </Helmet>

      {/* Hero Header Section */}
      <div style={{ position: 'relative', width: '100%', height: '85vh', overflow: 'hidden', backgroundColor: 'var(--black)' }}>
        {coverImg && (
          <img 
            src={coverImg} 
            alt={post.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7, transform: 'scale(1.05)' }} 
          />
        )}
        <div style={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          right: 0, 
          padding: '6rem 0',
          background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
          color: 'white'
        }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <Link to="/blog" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.6rem', 
              color: 'var(--accent)', 
              textDecoration: 'none', 
              fontWeight: 600, 
              fontSize: '0.9rem', 
              textTransform: 'uppercase', 
              letterSpacing: '2px',
              marginBottom: '2rem'
            }}>
              <ArrowLeft size={16} /> Back to archives
            </Link>
            {post.category && (
              <div style={{ 
                display: 'inline-block', 
                backgroundColor: 'rgba(255,255,255,0.15)', 
                padding: '0.4rem 1rem', 
                borderRadius: '50px', 
                fontSize: '0.9rem', 
                fontWeight: 600, 
                marginBottom: '1rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                {post.category}
              </div>
            )}
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
              lineHeight: 1.1, 
              fontWeight: 700, 
              marginBottom: '2rem',
              letterSpacing: '-2px'
            }}>
              {post.title}
            </h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', fontSize: '1rem', opacity: 0.8, fontWeight: 500 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><User size={18} /> {post.author}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={18} /> {new Date(post.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={18} /> {readingTime} min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container" style={{ maxWidth: '750px', marginTop: '6rem' }}>
        
        {/* Author Lead / Intro */}
        {post.summary && (
          <div style={{ 
            fontSize: '1.5rem', 
            lineHeight: 1.6, 
            color: 'var(--gray-900)', 
            fontWeight: 500, 
            marginBottom: '4rem',
            paddingLeft: '1.5rem',
            borderLeft: '4px solid var(--primary)',
            fontStyle: 'italic'
          }}>
            {post.summary}
          </div>
        )}

        <div className="article-body" style={{ color: 'var(--gray-900)' }}>
          {post.blocks && post.blocks.map((block) => {
            switch (block.type) {
              case 'heading':
                return (
                  <h2 key={block.id} style={{ 
                    fontSize: '2.4rem', 
                    fontWeight: 700, 
                    marginTop: '4.5rem', 
                    marginBottom: '1.5rem', 
                    lineHeight: 1.2,
                    letterSpacing: '-0.5px'
                  }}>
                    {block.value}
                  </h2>
                );
              case 'paragraph':
                return (
                  <p key={block.id} style={{ 
                    fontSize: '1.25rem', 
                    lineHeight: 1.9, 
                    marginBottom: '2rem', 
                    color: 'var(--gray-800)',
                    wordSpacing: '0.02em'
                  }}>
                    {block.value}
                  </p>
                );
              case 'quote':
                return (
                  <blockquote key={block.id} style={{ 
                    margin: '4rem -4rem',
                    padding: '3rem 4rem',
                    backgroundColor: 'var(--gray-100)',
                    borderRadius: '12px',
                    textAlign: 'center'
                  }}>
                    <p style={{ 
                      fontSize: '1.8rem', 
                      lineHeight: 1.5, 
                      fontWeight: 600, 
                      color: 'var(--primary)',
                      fontStyle: 'italic',
                      marginBottom: '1rem'
                    }}>
                      "{block.value}"
                    </p>
                    <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--accent)', margin: '0 auto' }} />
                  </blockquote>
                );
              case 'image':
                return (
                  <figure key={block.id} style={{ margin: '4rem -10rem', textAlign: 'center' }}>
                    <img 
                      src={block.value} 
                      alt="Article insight" 
                      style={{ 
                        width: '100vw', 
                        maxWidth: 'calc(750px + 20rem)', 
                        maxHeight: '70vh', 
                        objectFit: 'cover', 
                        borderRadius: '12px',
                        boxShadow: 'var(--shadow-lg)'
                      }} 
                    />
                  </figure>
                );
              case 'gallery':
                return (
                  <div key={block.id} style={{ margin: '4rem -10rem' }}>
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(6, 1fr)', 
                      gridAutoRows: '250px',
                      gap: '1rem' 
                    }}>
                      {block.values && block.values.map((src, idx) => {
                        // Artistic Bento Grid Logic
                        let gridSpan = 'span 2';
                        if (idx % 3 === 0) gridSpan = 'span 4';
                        if (idx % 5 === 0) gridSpan = 'span 3';
                        if (block.values.length === 2) gridSpan = 'span 3';
                        
                        return (
                          <div key={idx} style={{ gridColumn: gridSpan, overflow: 'hidden', borderRadius: '12px', boxShadow: 'var(--shadow)' }}>
                            <img 
                              src={src} 
                              alt={`Gallery item ${idx}`} 
                              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition)' }} 
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>

        {/* Fallback for legacy posts */}
        {(!post.blocks || post.blocks.length === 0) && (
          <div style={{ fontSize: '1.25rem', lineHeight: 1.9, color: 'var(--gray-800)', whiteSpace: 'pre-line' }}>
            {post.content}
          </div>
        )}

        <hr style={{ margin: '6rem 0', borderColor: 'var(--gray-200)', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
        
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Want more stories from GreenBelt?</h4>
          <Link to="/blog" className="btn btn-outline">Back to Magazine</Link>
        </div>

      </div>
    </div>
  );
};

export default BlogPostPage;
