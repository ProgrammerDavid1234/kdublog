import React from 'react'
import './Feature.css'
import random from "../../assets/random.jpeg"

const Feature = () => {
    return (
        <section className="feature-container" id="resources">
            <div className="feature-header">
                <h2 className="feature-title">Feature News</h2>
                <div className="feature-nav">
                    <button className="nav-arrow prev">&#8249;</button>
                    <button className="nav-arrow next">&#8250;</button>
                </div>
            </div>

            <div className="feature-grid">
                <div className="feature-item">
                    <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Feature 1" className="feature-image" />
                    <div className="feature-overlay">
                        <span className="feature-cat">Tech Events</span>
                        <h3 className="feature-headline">Recap: 2025 Google Developer Student Club Summit</h3>
                    </div>
                </div>
                <div className="feature-item">
                    <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Feature 2" className="feature-image" />
                    <div className="feature-overlay">
                        <span className="feature-cat">Student Life</span>
                        <h3 className="feature-headline">Exam Prep: Top tips for surviving finals week</h3>
                    </div>
                </div>
                <div className="feature-item">
                    <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Feature 3" className="feature-image" />
                    <div className="feature-overlay">
                        <span className="feature-cat">Workshops</span>
                        <h3 className="feature-headline">Hands-on with Python: Building your first AI model</h3>
                    </div>
                </div>
                <div className="feature-item">
                    <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Feature 4" className="feature-image" />
                    <div className="feature-overlay">
                        <span className="feature-cat">Community</span>
                        <h3 className="feature-headline">Building connections: The importance of networking in tech</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature