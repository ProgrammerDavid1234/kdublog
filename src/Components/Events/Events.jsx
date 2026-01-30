import React, { useState, useEffect } from 'react';
import './Events.css';
import { getEvents } from '../../services/api';

const Events = () => {
    const [eventsData, setEventsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await getEvents();
                if (response.data.success) {
                    const events = response.data.data;
                    setEventsData(events.map(event => {
                        const date = new Date(event.date);
                        return {
                            id: event._id,
                            day: date.getDate(),
                            month: date.toLocaleString('default', { month: 'short' }).toUpperCase(),
                            title: event.title,
                            location: event.location || "On Campus",
                            time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                        };
                    }));
                }
            } catch (error) {
                console.error("Error fetching events:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    if (loading) {
        return <div className="events-container">Loading events...</div>;
    }

    return (
        <section className="events-container" id="events">
            <div className="section-header">
                <h2 className="section-title">Upcoming Events</h2>
                <a href="#" className="view-all">View Calendar &rarr;</a>
            </div>

            <div className="events-list">
                {eventsData.length > 0 ? (
                    eventsData.map(event => (
                        <div key={event.id} className="event-card">
                            <div className="event-date">
                                <span className="day">{event.day}</span>
                                <span className="month">{event.month}</span>
                            </div>
                            <div className="event-details">
                                <h3 className="event-title">{event.title}</h3>
                                <div className="event-meta">
                                    <span className="location">📍 {event.location}</span>
                                    <span className="time">⏰ {event.time}</span>
                                </div>
                            </div>
                            <button className="add-calendar-btn" aria-label="Add to Calendar">
                                +
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="no-events">No upcoming events.</div>
                )}
            </div>
        </section>
    );
};

export default Events;
