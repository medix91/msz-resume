import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Pour l'instant, on affiche juste une confirmation
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact">
      <h2>Contactez-moi</h2>
      {submitted ? (
        <div className="contact__confirmation">
          <p>Merci pour votre message ! Je reviendrai vers vous rapidement.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__input-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="contact__submit-button">Envoyer</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
