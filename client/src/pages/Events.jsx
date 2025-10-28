import { useState, useEffect } from "react";
import api from "../utils/api";
import fallbackImg from "../assets/img/bg-hero.png"
import "../assets/css/Events.css";

const Events = () => {
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [pastEvents, setPastEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchEvents = async () => {
        try {
            setLoading(true);
            const data = await api.get("/events");
            setUpcomingEvents(data.upcoming_events || []);
            setPastEvents(data.past_events || []);

        } catch (err) {
            console.error("Error fetching events:", err);
            setError(err.message);

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleRegistration = async (eventId, formData) => {
        try {
            await api.post(`/events/${eventId}/register`, formData);
            return { success: true, message: "Registration successful!" };
            
        } catch (error) {
            console.error("Registration error:", error);
            return { success: false, message: error.message || "Registration failed" };
        }
    };

    const EventCard = ({ event, isPast = false }) => {
        const [showModal, setShowModal] = useState(false);
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            phone: '',
            comments: ''
        });
        const [submitting, setSubmitting] = useState(false);
        const [submitMessage, setSubmitMessage] = useState(null);

        const handleSubmit = async (e) => {
            e.preventDefault();
            setSubmitting(true);
            setSubmitMessage(null);
            
            const result = await handleRegistration(event.id, formData);
            
            if (result.success) {
                setSubmitMessage({ type: 'success', text: result.message });
                setTimeout(() => {
                    setShowModal(false);
                    setFormData({ name: '', email: '', phone: '', comments: '' });
                    setSubmitMessage(null);
                }, 2000);
            } else {
                setSubmitMessage({ type: 'error', text: result.message });
            }
            
            setSubmitting(false);
        };

        const handleInputChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        const formatDate = (dateString) => {
            return new Date(dateString).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        };

        const handleCloseModal = () => {
            if (!submitting) {
                setShowModal(false);
                setSubmitMessage(null);
            }
        };

        return (
            <div className="col-md-4 mb-4">
                <div className="card event-card animate__animated animate__fadeInUp">
                    <img 
                        src={event.thumbnail || fallbackImg} 
                        className="fixed-thumbnail card-img-top" 
                        alt={event.title}
                        onError={(e) => {
                            e.target.src = fallbackImg;
                        }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{event.title}</h5>
                        <p className="card-text">
                            {event.description.length > 100 
                                ? `${event.description.substring(0, 100)}...` 
                                : event.description
                            }
                        </p>
                        <p className="card-date">
                            <strong>When:</strong> {formatDate(event.date)}
                        </p>
                        <div className="register-btn">
                            {!isPast ? (
                                <button 
                                    type="button" 
                                    className="btn1 btn-primary btn-register" 
                                    onClick={() => setShowModal(true)}
                                    disabled={event.registration_closed}
                                >
                                    {event.registration_closed ? 'Registration Closed' : 'Register →'}
                                </button>
                            ) : (
                                <button type="button" className="btn1 btn-secondary" disabled>
                                    Event Over
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {showModal && (
                    <div className="modal-backdrop show" onClick={handleCloseModal}>
                        <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Register for {event.title}</h5>
                                    <button 
                                        type="button" 
                                        className="close" 
                                        onClick={handleCloseModal}
                                        disabled={submitting}
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    {submitMessage && (
                                        <div className={`alert alert-${submitMessage.type === 'success' ? 'success' : 'danger'}`} 
                                             style={{ 
                                                 marginBottom: '20px',
                                                 padding: '12px 16px',
                                                 borderRadius: '8px',
                                                 border: 'none'
                                             }}>
                                            {submitMessage.text}
                                        </div>
                                    )}
                                    <form onSubmit={handleSubmit} className="registration-form">
                                        <div className="form-group">
                                            <label htmlFor={`name-${event.id}`}>Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id={`name-${event.id}`}
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Enter your full name"
                                                required
                                                disabled={submitting}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor={`email-${event.id}`}>Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id={`email-${event.id}`}
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="your.email@example.com"
                                                required
                                                disabled={submitting}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor={`phone-${event.id}`}>Phone</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                id={`phone-${event.id}`}
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="+971 50 123 4567"
                                                disabled={submitting}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor={`comments-${event.id}`}>Comments</label>
                                            <textarea
                                                className="form-control"
                                                id={`comments-${event.id}`}
                                                name="comments"
                                                rows="3"
                                                value={formData.comments}
                                                onChange={handleInputChange}
                                                placeholder="Any special requirements or questions?"
                                                disabled={submitting}
                                            />
                                        </div>
                                        <button 
                                            type="submit" 
                                            className="btn btn-success"
                                            disabled={submitting}
                                        >
                                            {submitting ? 'Submitting...' : 'Submit Registration'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    const EventsSection = () => {
        const [activeSection, setActiveSection] = useState('upcoming');

        if (loading) {
            return (
                <div className="container text-center py-5">
                    <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                        <span className="visually-hidden">Loading events...</span>
                    </div>
                    <p className="mt-3" style={{ fontSize: '1.1rem', color: '#4a5568' }}>Loading events...</p>
                </div>
            );
        }

        if (error) {
            return (
                <div className="container text-center py-5">
                    <div className="alert alert-danger" role="alert" style={{ maxWidth: '500px', margin: '0 auto' }}>
                        <strong>Error loading events:</strong> {error}
                    </div>
                    <button 
                        className="btn btn-primary mt-3"
                        onClick={fetchEvents}
                        style={{ padding: '12px 32px', borderRadius: '8px' }}
                    >
                        Try Again
                    </button>
                </div>
            );
        }

        return (
            <div className="events-container container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <button
                            className={`btn toggle-events-btn ${
                                activeSection === 'upcoming' ? 'btn-primary active' : 'btn-secondary'
                            }`}
                            onClick={() => setActiveSection('upcoming')}
                        >
                            Upcoming Events ({upcomingEvents.length})
                        </button>
                        <button
                            className={`btn toggle-events-btn ${
                                activeSection === 'past' ? 'btn-primary active' : 'btn-secondary'
                            }`}
                            onClick={() => setActiveSection('past')}
                        >
                            Past Events ({pastEvents.length})
                        </button>
                    </div>
                </div>

                <div 
                    id="upcomingEventsSection" 
                    style={{ display: activeSection === 'upcoming' ? 'block' : 'none' }}
                >
                    <h1 className="animate__animated animate__slideInRight" style={{ marginBottom: '40px' }}>
                        Upcoming Events
                    </h1>
                    {upcomingEvents.length === 0 ? (
                        <div className="text-center py-5">
                            <p className="lead">No upcoming events scheduled.</p>
                            <p>Check back later for new events!</p>
                        </div>
                    ) : (
                        <div className="row">
                            {upcomingEvents.map(event => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </div>
                    )}
                </div>

                <div 
                    id="pastEventsSection" 
                    style={{ display: activeSection === 'past' ? 'block' : 'none' }}
                >
                    <h1 className="animate__animated animate__slideInRight" style={{ marginBottom: '40px' }}>
                        Past Events
                    </h1>
                    {pastEvents.length === 0 ? (
                        <div className="text-center py-5">
                            <p className="lead">No past events to display.</p>
                        </div>
                    ) : (
                        <div className="row">
                            {pastEvents.map(event => (
                                <EventCard key={event.id} event={event} isPast={true} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <>
            <section 
                className="container-fluid pt-5 bg-primary hero-header mb-5 animate__animated animate__fadeIn"
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container pt-5">
                    <div className="row g-5 pt-5">
                        <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                            <h1 className="display-4 text-white mb-4 animate__animated animate__slideInRight">
                                Events
                            </h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                                    <li className="breadcrumb-item">
                                        <a className="text-white" href="/">
                                            Home
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">
                                        Events
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <EventsSection />
        </>
    );
};

export default Events;