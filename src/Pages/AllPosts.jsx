import React, { useState, useEffect } from "react";
import "./AllPosts.css";
import { getAllPosts } from "../services/api";

const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [category, setCategory] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const response = await getAllPosts({ page, limit: 9 });
            if (response.data.success) {
                const { data, meta } = response.data;

                const formattedPosts = data.map(post => ({
                    id: post._id,
                    title: post.title,
                    excerpt: post.excerpt,
                    category: post.category?.name || "General",
                    author: post.author?.username || "Admin",
                    date: new Date(post.createdAt).toLocaleDateString(),
                    image: post.coverImage || "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    readTime: "5 min read" // Placeholder
                }));

                setPosts(formattedPosts);
                setTotalPages(meta?.totalPages || 1);
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [page, category]);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchTerm);
    };

    return (
        <div className="all-posts-page">
            <div className="container">
                {/* Page Header */}
                <header className="page-header">
                    <h1 className="page-title">Our Blog</h1>
                    <p className="page-subtitle">Latest news, tutorials, and updates from NACOS KDU.</p>
                </header>

                {/* Filter & Search Bar */}
                <div className="controls-bar glass-effect">
                    <div className="categories-filter">
                        <button
                            className={`filter-btn ${category === "" ? "active" : ""}`}
                            onClick={() => setCategory("")}
                        >
                            All View
                        </button>
                        <button
                            className={`filter-btn ${category === "Tech" ? "active" : ""}`}
                            onClick={() => setCategory("Tech")}
                        >
                            Technology
                        </button>
                        <button
                            className={`filter-btn ${category === "Events" ? "active" : ""}`}
                            onClick={() => setCategory("Events")}
                        >
                            Events
                        </button>
                        <button
                            className={`filter-btn ${category === "Academic" ? "active" : ""}`}
                            onClick={() => setCategory("Academic")}
                        >
                            Academic
                        </button>
                    </div>

                    <form className="search-form" onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </button>
                    </form>
                </div>

                {/* Posts Grid */}
                {loading ? (
                    <div className="loading-grid">
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                            <div key={n} className="skeleton-card"></div>
                        ))}
                    </div>
                ) : (
                    <div className="posts-grid">
                        {posts.map((post) => (
                            <article key={post.id} className="post-card-vertical">
                                <div className="card-image">
                                    <img src={post.image} alt={post.title} />
                                    <span className="card-category">{post.category}</span>
                                </div>
                                <div className="card-content">
                                    <div className="card-meta">
                                        <span className="author">{post.author}</span>
                                        <span className="dot">•</span>
                                        <span className="date">{post.date}</span>
                                    </div>
                                    <h3 className="card-title">
                                        <a href={`/posts/${post.id}`}>{post.title}</a>
                                    </h3>
                                    <p className="card-excerpt">{post.excerpt}</p>
                                    <div className="card-footer">
                                        <span className="read-time">{post.readTime}</span>
                                        <a href={`/posts/${post.id}`} className="read-link">Read Article</a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                <div className="pagination">
                    <button
                        className="page-btn prev"
                        disabled={page === 1}
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                    >
                        &larr; Previous
                    </button>
                    <span className="page-info">Page {page} of {totalPages}</span>
                    <button
                        className="page-btn next"
                        disabled={page === totalPages}
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllPosts;
