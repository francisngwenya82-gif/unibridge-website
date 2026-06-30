'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      {/* Header */}
      <header>
        <nav>
          <a href="#" className="logo">
            Uni<span>Bridge</span>
          </a>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#why-us">Why Us</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Your <span className="highlight">Bridge</span> to Higher Education
          </h1>
          <p>
            Expert university counseling and admission guidance for international students. Let us help you achieve your dreams.
          </p>
          <a href="#contact" className="cta-button">Get Started Today</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="container">
          <div className="section-subtitle">What We Offer</div>
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎓</div>
              <h3>University Selection & Guidance</h3>
              <p>
                Personalized guidance to help you identify the perfect university match based on your academic profile, interests, and career goals.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">📝</div>
              <h3>Application Assistance</h3>
              <p>
                Comprehensive support with application essays, personal statements, and documentation to make your profile stand out.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎤</div>
              <h3>Interview Preparation</h3>
              <p>
                Mock interviews and coaching to boost your confidence and help you present your best self to admissions officers.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">💰</div>
              <h3>Scholarship Counseling</h3>
              <p>
                Expert guidance on identifying and applying for scholarships, bursaries, and financial aid opportunities worldwide.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Test Preparation Support</h3>
              <p>
                Resources and mentoring for IELTS, TOEFL, SAT, ACT, and other standardized tests required for admission.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌍</div>
              <h3>Visa & Travel Assistance</h3>
              <p>
                Guidance on student visa processes, travel arrangements, and settling into your new country and university.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us">
        <div className="container">
          <div className="section-subtitle">Our Strengths</div>
          <h2>Why Choose UniBridge?</h2>
          <div className="why-us-grid">
            <div className="why-us-item">
              <div className="stat-number">500+</div>
              <h3>Students Admitted</h3>
              <p>Successfully guided over 500 students into their dream universities worldwide.</p>
            </div>
            <div className="why-us-item">
              <div className="stat-number">95%</div>
              <h3>Success Rate</h3>
              <p>Our students achieve an average success rate of 95% in university admissions.</p>
            </div>
            <div className="why-us-item">
              <div className="stat-number">50+</div>
              <h3>Partner Universities</h3>
              <p>Partnerships with over 50 universities across the UK, US, Canada, and Australia.</p>
            </div>
            <div className="why-us-item">
              <div className="stat-number">15+</div>
              <h3>Years Experience</h3>
              <p>Over 15 years of expertise in university admissions and student guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <div className="container">
          <div className="section-subtitle">Success Stories</div>
          <h2>Student Testimonials</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <p>
                "UniBridge transformed my application. The team helped me craft compelling essays and prepare for interviews. I got admitted to my top choice!"
              </p>
              <div className="testimonial-author">– Sarah M., Oxford University</div>
            </div>
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <p>
                "The guidance I received was invaluable. They helped me understand my strengths and position myself effectively. Highly recommended!"
              </p>
              <div className="testimonial-author">– Ahmed K., Harvard University</div>
            </div>
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <p>
                "Professional, supportive, and results-driven. UniBridge went above and beyond to ensure my success. Thank you!"
              </p>
              <div className="testimonial-author">– Priya P., Stanford University</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="contact-item">
                <div>
                  <h4>📍 Address</h4>
                  <p>123 Education Boulevard<br />Learning City, LC 12345</p>
                </div>
              </div>
              <div className="contact-item">
                <div>
                  <h4>📞 Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <div>
                  <h4>✉️ Email</h4>
                  <p>info@unibridge.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div>
                  <h4>🕐 Office Hours</h4>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 UniBridge Consultancy. Your Bridge to Higher Education.</p>
        <p>All rights reserved.</p>
      </footer>
    </>
  );
}
