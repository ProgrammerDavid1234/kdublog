import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            // Simulate API call
            setStatus('loading');
            setTimeout(() => {
                setStatus('success');
                setEmail('');
            }, 1500);
        }
    };

    return (
        <section className="newsletter-section" id="join">
            <div className="newsletter-container">
                <div className="newsletter-content">
                    <h2 className="newsletter-title">Stay in the Loop</h2>
                    <p className="newsletter-desc">
                        Subscribe to the NACOS KDU newsletter to get the latest tech news, workshop alerts, and student achievements delivered to your inbox.
                    </p>

                    <form className="newsletter-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="newsletter-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" className="newsletter-btn" disabled={status === 'loading'}>
                                {status === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
                            </button>
                        </div>
                        {status === 'success' && (
                            <p className="success-message">🎉 Thanks for subscribing!</p>
                        )}
                    </form>

                    <p className="newsletter-note">We respect your inbox. No spam, ever.</p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
