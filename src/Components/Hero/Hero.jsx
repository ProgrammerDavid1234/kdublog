import React, { useState, useEffect } from "react";
import "./Hero.css";
import { getHomepageData } from "../../services/api";

const Hero = () => {
    // State for dynamic data
    const [slides, setSlides] = useState([]);
    const [featuredPost, setFeaturedPost] = useState(null);
    const [announcements, setAnnouncements] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // State for slider interactions
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                const response = await getHomepageData();
                if (response.data.success) {
                    const { trendingParams, featuredParams, announcements, upcomingEvents } = response.data.data;

                    // Helper: map post to slide format
                    const mapPostToSlide = (post) => ({
                        id: post._id,
                        image: post.coverImage || "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                        category: post.category?.name || "Tech",
                        date: new Date(post.createdAt).toLocaleDateString(),
                        title: post.title,
                        link: `/posts/${post._id}`
                    });

                    setSlides((trendingParams || []).map(mapPostToSlide));

                    if (featuredParams && featuredParams.length > 0) {
                        setFeaturedPost(mapPostToSlide(featuredParams[0]));
                    }

                    setAnnouncements((announcements || []).map(a => ({
                        id: a._id,
                        text: a.title, // Assuming announcement has title
                        time: "Just now" // Placeholder, maybe redundant if date exists
                    })));

                    setUpcomingEvents((upcomingEvents || []).map(e => ({
                        id: e._id,
                        day: new Date(e.date).getDate(),
                        month: new Date(e.date).toLocaleString('default', { month: 'short' }),
                        title: e.title,
                        location: e.location || "Main Hall"
                    })));
                }
            } catch (err) {
                console.error("Error fetching hero data:", err);
                setError("Failed to load content.");
            } finally {
                setLoading(false);
            }
        };

        fetchHeroData();
    }, []);


    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    // Auto-advance slider
    useEffect(() => {
        if (slides.length > 1) {
            const timer = setInterval(nextSlide, 5000);
            return () => clearInterval(timer);
        }
    }, [slides, currentSlide]);

    if (loading) return <div className="hero-loading">Loading content...</div>;
    if (error) return <div className="hero-error">{error}</div>;

    return (
        <section className="hero-section">
            <div className="container hero-container">
                {/* Left Column: Immersive Slider */}
                <div className="hero-main">
                    {slides.length > 0 ? (
                        <div className="hero-slider">
                            {slides.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className={`slide ${index === currentSlide ? "active" : ""}`}
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                >
                                    <div className="slide-overlay">
                                        <div className="slide-content animate-fade-up">
                                            <span className="slide-category">{slide.category}</span>
                                            <h2 className="slide-title"><a href={slide.link}>{slide.title}</a></h2>
                                            <div className="slide-meta">
                                                <span>{slide.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="slider-controls">
                                <button onClick={prevSlide} className="control-btn prev" aria-label="Previous Slide">❮</button>
                                <button onClick={nextSlide} className="control-btn next" aria-label="Next Slide">❯</button>
                            </div>

                            <div className="slider-dots">
                                {slides.map((_, idx) => (
                                    <span
                                        key={idx}
                                        className={`dot ${idx === currentSlide ? 'active' : ''}`}
                                        onClick={() => setCurrentSlide(idx)}
                                    ></span>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="no-slides-message">No trending posts available.</div>
                    )}
                </div>

                {/* Right Column: Featured Post, Announcements, Upcoming Events */}
                {/* This section was missing in the original code, adding a placeholder structure */}
                <div className="hero-sidebar">
                    {featuredPost && (
                        <div className="featured-post">
                            <h3>Featured Post</h3>
                            <img src={featuredPost.image} alt={featuredPost.title} />
                            <h4><a href={featuredPost.link}>{featuredPost.title}</a></h4>
                            <p>{featuredPost.date}</p>
                        </div>
                    )}

                    {announcements.length > 0 && (
                        <div className="announcements-section">
                            <h3>Announcements</h3>
                            <ul>
                                {announcements.map(announcement => (
                                    <li key={announcement.id}>
                                        <span>{announcement.time}</span> - {announcement.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {upcomingEvents.length > 0 && (
                        <div className="events-section">
                            <h3>Upcoming Events</h3>
                            <ul>
                                {upcomingEvents.map(event => (
                                    <li key={event.id}>
                                        <div className="event-date">
                                            <span className="day">{event.day}</span>
                                            <span className="month">{event.month}</span>
                                        </div>
                                        <div className="event-details">
                                            <h4>{event.title}</h4>
                                            <p>{event.location}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default Hero;