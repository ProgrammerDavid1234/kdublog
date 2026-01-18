import React, { useState } from 'react'
import './Hero.css'
import random from "../../assets/random.jpeg"

const newsItems = [
    {
        id: 1,
        title: "NACOS Annual Tech Summit 2026 Announced",
        subtitle: "Join us for the biggest tech event on campus.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        title: "Coding Bootcamp Registration Now Open",
        subtitle: "Master Full-Stack Development in 6 weeks.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        title: "KDU Robotics Team Wins National Competition",
        subtitle: "A proud moment for our department.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        title: "New AI Research Lab Inaugurated",
        subtitle: "Advancing machine learning research at KDU.",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 5,
        title: "Career Talk: Navigating the Tech Industry",
        subtitle: "Insights from industry veterans.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
];

const sidebarItems = [
    {
        id: 1,
        category: "ACHIEVEMENTS",
        date: "Jan 12, 2026",
        title: "Student Spotlight: Hackathon Winners",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        category: "DEPARTMENT",
        date: "Jan 10, 2026",
        title: "Curriculum Update: New Cyber Security Course",
        image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        category: "EVENTS",
        date: "Jan 08, 2026",
        title: "Upcoming Workshop: Introduction to Cloud Computing",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        category: "ALUMNI",
        date: "Jan 05, 2026",
        title: "Alumni Network Launch: Connect with past graduates",
        image: "https://images.unsplash.com/photo-1521791136064-7985c2717883?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
]

const Hero = () => {
    const [startIndex, setStartIndex] = useState(0);
    const itemsToShow = 3;

    const handleNext = () => {
        setStartIndex((prev) => (prev + 1) % newsItems.length);
    };

    const handlePrev = () => {
        setStartIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
    };

    const visibleItems = [];
    for (let i = 0; i < itemsToShow; i++) {
        visibleItems.push(newsItems[(startIndex + i) % newsItems.length]);
    }

    return (
        <div className="hero-container" id="home">
            <div className="slider-wrapper">
                <button className="nav-button prev" onClick={handlePrev}>&#8249;</button>
                <div className="slider-content">
                    {visibleItems.map((item, index) => (
                        <div key={`${item.id}-${index}`} className="news-card">
                            <img src={item.image} alt={item.title} className="news-image" />
                            <div className="news-content">
                                <h3 className="news-title">{item.title}</h3>
                                <p className="news-subtitle">{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="nav-button next" onClick={handleNext}>&#8250;</button>
            </div>

            <div className="hero-main-content">

                <div className="featured-article">
                    <img src={random} alt="Featured" className="featured-bg" />
                    <div className="featured-overlay">
                        <div className="play-button">
                            <div className="play-icon">▶</div>
                        </div>
                        <div className="featured-text">
                            <div className="meta-tag">
                                <span className="category">NACOS</span>
                                <span className="date"> / Jan 11, 2026</span>
                            </div>
                            <h1 className="featured-title">Welcome to the NACOS KDU Chapter Blog</h1>
                            <p className="featured-desc">Stay updated with the latest news, events, and student achievements from the Department of Computer Science at KolaDaisi University.</p>
                        </div>
                    </div>
                </div>

                <div className="sidebar-section">
                    <div className="sidebar-tabs">
                        <button className="tab active">RELATED</button>
                        <button className="tab">RELATED</button>
                        <button className="tab">POPULAR</button>
                    </div>

                    <div className="sidebar-list">
                        {sidebarItems.map(item => (
                            <div key={item.id} className="sidebar-item">
                                <div className="sidebar-img-container">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="sidebar-text">
                                    <div className="sidebar-meta">
                                        <span className="cat">{item.category}</span>
                                        <span className="date"> / {item.date}</span>
                                    </div>
                                    <h4 className="sidebar-title">{item.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero