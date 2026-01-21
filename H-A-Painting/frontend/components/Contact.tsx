import React, { useState } from 'react';
import '../css/Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const postContact = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus(null);
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, phone, address, serviceType, message })
      });
      const data = await response.json().catch(() => null);

      if (!response.ok || !data || data.success !== true) {
        setStatus({
          type: 'error',
          message: (data && (data.message || data.error)) || 'An error occurred. Please try again.',
        });
        return;
      }

      setStatus({ type: 'success', message: 'Message sent! We will give you a call.' });
      setName('');
      setEmail('');
      setPhone('');
      setAddress('');
      setServiceType('');
      setMessage('');
    } catch (error) {
      console.log(error);
      setStatus({ type: 'error', message: 'An error occurred. Please try again.' });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Request a Free Quote</h2>
        <p className="contact-subtitle">Fill out the form below and we'll get back to you within 24 hours</p>

        {status && (
          <div className={`status-message ${status.type}`}>{status.message}</div>
        )}

        <form className="contact-form" onSubmit={postContact}>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="(941) 555-1234"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address *</label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              placeholder="123 Main St, Sarasota, FL"
            />
          </div>

          <div className="form-group">
            <label htmlFor="serviceType">Service *</label>
            <select
              id="serviceType"
              name="serviceType"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Interior or Exterior
              </option>
              <option value="interior">Interior</option>
              <option value="exterior">Exterior</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Project Details *</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              placeholder="Tell us about your painting project..."
            />
          </div>

          <button
            type="submit"
            className={`submit-button${status?.type === 'success' ? ' success' : ''}`}
            disabled={status?.type === 'success'}
          >
            {status?.type === 'success' ? 'We will give you a call' : 'Request Free Quote'}
          </button>
        </form>

        <div className="contact-info">
          <div className="contact-info-item">
            <h3>Call Us</h3>
            <p><a href="tel:941-223-6254">941-223-6254</a></p>
          </div>
          <div className="contact-info-item">
            <h3>Email Us</h3>
            <p><a href="mailto:info@hapainting.com">info@hapainting.com</a></p>
          </div>
          <div className="contact-info-item">
            <h3>Service Areas</h3>
            <p>Sarasota, Bradenton, Englewood</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

