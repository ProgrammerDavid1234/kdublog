import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SinglePost.css";
import { getPost } from "../services/api";

const SinglePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchPost = async () => {
        try {
            const response = await getPost(id);
            if (response.data.success) {
                setPost(response.data.data);
            }
        } catch (error) {
            console.error("Error fetching post:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPost();
    }, [id]);

    if (loading) return <div className="loading-container">Loading...</div>;

    if (!post) return <div className="error-container">Post not found</div>;

    return (
        <div className="single-post-page">
            <div className="post-hero">
                <div className="post-hero-overlay"></div>
                <img
                    src={post.coverImage || "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}
                    alt={post.title}
                    className="post-hero-image"
                />
                <div className="container post-hero-content">
                    <span className="post-category-badge">{post.category?.name || "General"}</span>
                    <h1 className="post-title-large">{post.title}</h1>
                    <div className="post-meta-large">
                        <div className="author-info">
                            <span className="author-name">By {post.author?.username || "Admin"}</span>
                        </div>
                        <span className="meta-dot">•</span>
                        <span className="post-date-large">
                            {new Date(post.createdAt).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                        <span className="meta-dot">•</span>
                        <span className="read-time-large">{post.readTime || "5 min read"}</span>
                    </div>
                </div>
            </div>

            <div className="container post-body-container">
                <article className="post-content-body">
                    <p className="post-lead">{post.excerpt}</p>
                    <div
                        className="post-html-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="post-tags-footer">
                        <span className="tags-label">Tags:</span>
                        <div className="tags-list">
                            <span className="tag-item">Technology</span>
                            <span className="tag-item">Innovation</span>
                            <span className="tag-item">KDU</span>
                        </div>
                    </div>
                </article>

                <aside className="post-sidebar">
                    <div className="sidebar-widget newsletter-widget">
                        <h3>Subscribe to our Newsletter</h3>
                        <p>Get the latest updates delivered straight to your inbox.</p>
                        <form className="sidebar-form">
                            <input type="email" placeholder="Your email address" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default SinglePost;
