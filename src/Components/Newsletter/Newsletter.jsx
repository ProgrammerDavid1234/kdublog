import React, { useState } from 'react';
import './Newsletter.css';
import { subscribeNewsletter } from '../../services/api';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        if (email) {
            setStatus('loading');
            try {
                const response = await subscribeNewsletter(email);
                if (response.data.success) {
                    setStatus('success');
                    setMessage('🎉 Thanks for subscribing!');
                    setEmail('');
                } else {
                    setStatus('error');
                    setMessage(response.data.message || 'Subscription failed. Please try again.');
                }
            } catch (error) {
                console.error("Newsletter subscription error:", error);
                setStatus('error');
                setMessage(error.response?.data?.message || 'An error occurred. Please try again later.');
            }
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
                            <p className="success-message">{message}</p>
                        )}
                        {status === 'error' && (
                            <p className="error-message" style={{ color: '#ff6b6b', marginTop: '10px' }}>{message}</p>
                        )}
                    </form>

                    <p className="newsletter-note">We respect your inbox. No spam, ever.</p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
