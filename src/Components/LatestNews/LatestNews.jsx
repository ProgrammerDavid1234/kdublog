import React from 'react';
import './LatestNews.css';

const posts = [
    {
        id: 1,
        title: "Understanding the Basics of Cloud Computing",
        excerpt: "A comprehensive guide to cloud services, deployment models, and how to get started with AWS and Azure.",
        category: "Cloud",
        author: "Samuel O.",
        date: "Jan 16, 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        title: "10 Tips for Acing Your Programming Exams",
        excerpt: "Expert advice from top-performing students on how to prepare effectively for data structures and algorithms.",
        category: "Academic",
        author: "Jessica M.",
        date: "Jan 14, 2026",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        title: "The Future of AI in Education",
        excerpt: "Exploring how artificial intelligence is reshaping the way we learn and interact with educational content.",
        category: "AI",
        author: "Dr. Adebayo",
        date: "Jan 12, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        title: "Web Development Trends to Watch in 2026",
        excerpt: "From WebAssembly to Edge Computing, here's what every developer needs to know this year.",
        category: "Web Dev",
        author: "David K.",
        date: "Jan 10, 2026",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 5,
        title: "Highlights from the NACOS Sports Week",
        excerpt: "A recap of the football matches, sack races, and other fun activities from last week's event.",
        category: "Social",
        author: "Team Sports",
        date: "Jan 08, 2026",
        readTime: "3 min read",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 6,
        title: "Getting Started with Open Source Contribution",
        excerpt: "Why you should contribute to open source projects and how to make your first pull request.",
        category: "Career",
        author: "Sarah L.",
        date: "Jan 05, 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
];

const LatestNews = () => {
    return (
        <section className="latest-news-container" id="news">
            <div className="section-header">
                <h2 className="section-title">Latest Posts</h2>
                <div className="filter-tags">
                    <button className="tag active">All</button>
                    <button className="tag">Academic</button>
                    <button className="tag">Tech</button>
                    <button className="tag">Social</button>
                </div>
            </div>

            <div className="news-grid">
                {posts.map(post => (
                    <article key={post.id} className="post-card">
                        <div className="post-image-container">
                            <img src={post.image} alt={post.title} className="post-image" />
                            <span className="post-category">{post.category}</span>
                        </div>
                        <div className="post-content">
                            <div className="post-meta-top">
                                <span className="post-author">{post.author}</span>
                                <span className="post-dot">·</span>
                                <span className="post-date">{post.date}</span>
                            </div>
                            <h3 className="post-title">{post.title}</h3>
                            <p className="post-excerpt">{post.excerpt}</p>
                            <div className="post-footer">
                                <span className="read-time">{post.readTime}</span>
                                <a href="#" className="read-more">Read Post &rarr;</a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className="load-more-container">
                <button className="btn btn-ghost load-more">Load More Posts</button>
            </div>
        </section>
    );
};

export default LatestNews;
