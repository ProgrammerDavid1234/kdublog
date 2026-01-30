import React, { useState, useEffect } from 'react';
import './LatestNews.css';
import { getAllPosts } from '../../services/api';

const LatestNews = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const postsPerPage = 6;

    const fetchPosts = async (pageNum) => {
        try {
            const response = await getAllPosts({ page: pageNum, limit: postsPerPage });
            if (response.data.success) {
                const newPosts = response.data.data.map(post => ({
                    id: post._id,
                    title: post.title,
                    excerpt: post.excerpt,
                    category: post.category?.name || "General",
                    author: post.author?.username || "Admin",
                    date: new Date(post.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' }),
                    readTime: post.readTime || "5 min read",
                    image: post.coverImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }));

                if (pageNum === 1) {
                    setPosts(newPosts);
                } else {
                    setPosts(prev => [...prev, ...newPosts]);
                }

                if (newPosts.length < postsPerPage) {
                    setHasMore(false);
                }
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts(1);
    }, []);

    const handleLoadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchPosts(nextPage);
    };

    return (
        <section className="latest-news-section" id="news">
            <div className="section-header">
                <h2 className="section-title">Latest Updates</h2>
                <div className="section-header-line"></div>
            </div>

            <div className="news-grid">
                {posts.map((post, index) => (
                    <article key={`${post.id}-${index}`} className="post-card">
                        <div className="post-image-container">
                            <img src={post.image} alt={post.title} className="post-image" />
                            <span className="post-category">{post.category}</span>
                            <div className="post-overlay"></div>
                        </div>
                        <div className="post-content">
                            <div className="post-meta-top">
                                <span className="post-author">{post.author}</span>
                                <span className="post-dot">·</span>
                                <span className="post-date">{post.date}</span>
                            </div>
                            <h3 className="post-title">
                                <a href={`/posts/${post.id}`}>{post.title}</a>
                            </h3>
                            <p className="post-excerpt">{post.excerpt}</p>
                            <div className="post-footer">
                                <span className="read-time">{post.readTime}</span>
                                <a href={`/posts/${post.id}`} className="read-more">Read Post <span>&rarr;</span></a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {loading && <div className="loading-spinner"></div>}

            {hasMore && !loading && (
                <div className="load-more-container">
                    <button className="btn-load-more" onClick={handleLoadMore}>
                        Load More Stories
                    </button>
                </div>
            )}
        </section>
    );
};

export default LatestNews;
