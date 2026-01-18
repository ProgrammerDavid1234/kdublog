import React from 'react';
import './Events.css';

const eventsData = [
    {
        id: 1,
        day: "24",
        month: "OCT",
        title: "Global Game Jam 2026",
        location: "KDU Tech Hub",
        time: "10:00 AM"
    },
    {
        id: 2,
        day: "02",
        month: "NOV",
        title: "Cyber Security Workshop",
        location: "Lecture Hall A",
        time: "2:00 PM"
    },
    {
        id: 3,
        day: "15",
        month: "NOV",
        title: "NACOS Career Fair",
        location: "University Auditorium",
        time: "9:00 AM"
    },
    {
        id: 4,
        day: "20",
        month: "NOV",
        title: "Alumni Meetup",
        location: "Virtual (Google Meet)",
        time: "6:00 PM"
    }
];

const Events = () => {
    return (
        <section className="events-container" id="events">
            <div className="section-header">
                <h2 className="section-title">Upcoming Events</h2>
                <a href="#" className="view-all">View Calendar &rarr;</a>
            </div>

            <div className="events-list">
                {eventsData.map(event => (
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
                ))}
            </div>
        </section>
    );
};

export default Events;
