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

  const universities = [
    'University of Zambia',
    'Copperbelt University',
    'Mulungushi University',
    'University of Lusaka',
    'Information and Communication University',
    'Cavendish University Zambia',
    'Northrise University',
    'Mukuba University',
    'Lusaka Apex Medical University',
    'ZCAS University',
    'Africa Christian University',
    'Chalimbana University',
    'Kwame Nkrumah University',
    'Texila American University Zambia',
    'Justo Mwale University',
    'Rusangu University',
    'Chreso University',
    'Eden University',
    'Levy Mwanawasa Medical University',
    'Zambia Catholic University',
  ];

  return (
    <>
      {/* Header */}
      <header>
        <nav>
          <a href="#" className="logo-link">
            <svg width="50" height="50" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
              <polygon points="250,120 350,80 450,120 450,140 250,140" fill="#002855"/>
              <polygon points="350,80 380,50 350,45 320,50" fill="#002855"/>
              <line x1="380" y1="50" x2="380" y2="110" stroke="#d4af37" strokeWidth="8" strokeLinecap="round"/>
              <circle cx="380" cy="115" r="8" fill="#d4af37"/>
              <path d="M 200 200 Q 200 350 320 350 Q 440 350 440 200" fill="none" stroke="#002855" strokeWidth="80" strokeLinecap="round"/>
              <path d="M 150 420 Q 320 340 490 420" fill="none" stroke="#d4af37" strokeWidth="20" strokeLinecap="round"/>
            </svg>
            <span className="logo-text">Uni<span style={{color: '#d4af37'}}>Bridge</span></span>
          </a>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#why-us">Why Us</a></li>
            <li><a href="#universities">Universities</a></li>
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
            Expert online university counseling and admission guidance. Helping students across Southern Africa achieve their academic dreams.
          </p>
          <a href="#contact" className="cta-button">Get Started Today</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="container">
          <div className="section-subtitle">What We Offer</div>
          <h2>Our E-Consultancy Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎓</div>
              <h3>University Selection & Guidance</h3>
              <p>
                Personalized online guidance to help you identify the perfect university match based on your academic profile, interests, and career goals.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">📝</div>
              <h3>Application Assistance</h3>
              <p>
                Comprehensive support with application essays, personal statements, and documentation to make your profile stand out to admissions teams.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎤</div>
              <h3>Interview Preparation</h3>
              <p>
                Virtual mock interviews and coaching to boost your confidence and help you present your best self to admissions officers.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">💰</div>
              <h3>Scholarship & Financial Aid</h3>
              <p>
                Expert guidance on identifying and applying for scholarships, bursaries, and financial aid opportunities across partner universities.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">📚</div>
              <h3>Academic Preparation</h3>
              <p>
                Support with entrance exams, academic requirements, and preparing you to excel in your chosen program from day one.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌍</div>
              <h3>Student Support Services</h3>
              <p>
                Ongoing support including visa guidance, accommodation assistance, and orientation to help you transition smoothly to university life.
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
              <div className="stat-number">200+</div>
              <h3>Students Admitted</h3>
              <p>Successfully guided over 200 students across our partner universities in the region.</p>
            </div>
            <div className="why-us-item">
              <div className="stat-number">20</div>
              <h3>Partner Universities</h3>
              <p>Direct partnerships with 20 leading universities across Zambia and the region.</p>
            </div>
            <div className="why-us-item">
              <div className="stat-number">100%</div>
              <h3>Online Service</h3>
              <p>Full e-consultancy service available online from anywhere in the world.</p>
            </div>
            <div className="why-us-item">
              <div className="stat-number">24/7</div>
              <h3>Support Available</h3>
              <p>Round-the-clock support to assist students across different time zones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section id="universities">
        <div className="container">
          <div className="section-subtitle">Our Network</div>
          <h2>Partner Universities</h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#666' }}>
            We have direct partnerships with leading universities across Zambia and the region
          </p>
          <div className="universities-grid">
            {universities.map((uni, index) => (
              <div key={index} className="university-card">
                <div className="university-icon">🏫</div>
                <h3>{uni}</h3>
              </div>
            ))}
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
                "UniBridge made the university application process so smooth. The team guided me through every step and I got admitted to my first choice!"
              </p>
              <div className="testimonial-author">– Chisomo M., Lusaka</div>
            </div>
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <p>
                "Professional, supportive, and genuinely invested in my success. UniBridge is truly a bridge to higher education."
              </p>
              <div className="testimonial-author">– Kabuya K., Ndola</div>
            </div>
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <p>
                "The online consultancy service is convenient and effective. I received personalized guidance that helped me make the right university choice."
              </p>
              <div className="testimonial-author">– Amara P., Kitwe</div>
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
                  <h4>📧 Email</h4>
                  <p>
                    <a href="mailto:unibridge.zm@gmail.com" style={{ color: '#d4af37', textDecoration: 'none' }}>
                      unibridge.zm@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div>
                  <h4>📱 Phone</h4>
                  <p>
                    <a href="tel:+263775750838" style={{ color: '#d4af37', textDecoration: 'none' }}>
                      +263 775 750 838
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div>
                  <h4>📍 Location</h4>
                  <p>Zimbabwe<br />Online E-Consultancy Service</p>
                </div>
              </div>
              <div className="contact-item">
                <div>
                  <h4>🌐 Service</h4>
                  <p>Available 24/7 for students worldwide</p>
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
        <p>All rights reserved. Based in Zimbabwe | Serving students worldwide</p>
      </footer>
    </>
  );
}
