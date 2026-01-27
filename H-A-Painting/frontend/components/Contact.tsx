import React, { useMemo, useState } from 'react';
import '../css/Contact.css';

type Status = { type: 'success' | 'error'; message: string } | null;

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [message, setMessage] = useState('');

  const [status, setStatus] = useState<Status>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isSuccess = status?.type === 'success';

  const submitLabel = useMemo(() => {
    if (isSubmitting) return 'Sending…';
    if (isSuccess) return 'We will give you a call';
    return 'Request Free Quote';
  }, [isSubmitting, isSuccess]);

  const postContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, address, serviceType, message }),
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
    } catch {
      setStatus({ type: 'error', message: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="hero contact-hero">
        <div className="hero__overlay" />
        <div className="container hero__content">
          <h1 className="hero__title">Request a Free Quote</h1>
          <p className="hero__subtitle">Fill out the form and we’ll get back to you within 24 hours.</p>
        </div>
      </div>

      <div className="section contact-body">
        <div className="container">
          <div className="grid grid--2 contact-grid">
            <aside className="contact-left" aria-label="Contact information">
              <div className="card contact-info-card">
                <div className="card__body">
                  <h2 className="contact-card-title">Contact Info</h2>

                  <div className="contact-info-block">
                    <div className="contact-info-label">Phone</div>
                    <a className="contact-info-link" href="tel:941-223-6254">
                      941-223-6254
                    </a>
                    <a className="contact-info-link" href="mailto:hapaintservicesllc@gmail.com">
                      hapaintservicesllc@gmail.com
                    </a>
                  </div>

                  <div className="contact-info-block">
                    <div className="contact-info-label">Service Areas</div>
                    <div className="contact-info-text">Sarasota, Bradenton, Englewood, North Port, Venice</div>
                  </div>
                </div>
              </div>
            </aside>

            <div className="contact-right">
              <div className="card contact-form-card">
                <div className="card__body">
                  {status && <div className={`status-message ${status.type}`}>{status.message}</div>}

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
                        <option value="interior">Interior</option>
                        <option value="exterior">Exterior</option>
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
                        placeholder="Tell us about your painting project…"
                      />
                    </div>

                    <button
                      type="submit"
                      className={`btn btn--primary contact-submit${isSuccess ? ' contact-submit--success' : ''}`}
                      disabled={isSubmitting || isSuccess}
                      aria-busy={isSubmitting}
                    >
                      {isSubmitting && <span className="contact-submit-spinner" aria-hidden="true" />}
                      {submitLabel}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

