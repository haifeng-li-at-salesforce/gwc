import Hero from '../components/Hero/Hero'
import Button from '../components/Button/Button'
import './Contact.css'

function Contact() {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      description: 'Send us an email and we\'ll get back to you as soon as possible.',
      action: 'gwc.troy@example.com', // Replace with actual email
      link: 'mailto:gwc.troy@example.com',
      buttonText: 'Send Email'
    },
    {
      icon: '📱',
      title: 'Follow Us',
      description: 'Stay updated with our latest news and events on social media.',
      action: '@gwc_troy', // Replace with actual handle
      link: '#', // Replace with actual Instagram link
      buttonText: 'Follow on Instagram'
    },
    {
      icon: '🏫',
      title: 'Visit Us',
      description: 'Find us at Troy High School during our regular meeting times.',
      action: 'Troy High School',
      link: '#/workshops',
      buttonText: 'See Schedule'
    }
  ]

  return (
    <div className="contact">
      <Hero
        subtitle="Get in Touch"
        title={<>We'd Love to <span>Hear From You</span></>}
        description="Have questions about our chapter? Want to get involved? Reach out to us!"
      />

      {/* Contact Methods */}
      <section className="section contact-methods-section">
        <div className="container">
          <div className="contact-grid">
            {contactMethods.map((method, index) => (
              <div key={index} className="contact-card">
                <span className="contact-icon">{method.icon}</span>
                <h3>{method.title}</h3>
                <p>{method.description}</p>
                <span className="contact-detail">{method.action}</span>
                <Button href={method.link} variant="secondary" size="small">
                  {method.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Form Alternative */}
      <section className="section form-section">
        <div className="container">
          <div className="form-card">
            <div className="form-content">
              <span className="section-label">Send a Message</span>
              <h2>Have a Question?</h2>
              <p>
                If you have any questions about our chapter, workshops, or how 
                to get involved, we're here to help! Use the button below to 
                send us a message through our Google Form.
              </p>
              <ul className="question-topics">
                <li>Questions about joining</li>
                <li>Workshop inquiries</li>
                <li>Partnership opportunities</li>
                <li>General feedback</li>
              </ul>
              <Button 
                href="https://forms.google.com" // Replace with actual contact form
                variant="primary" 
                size="large"
              >
                Open Contact Form
              </Button>
            </div>
            <div className="form-visual">
              <div className="message-illustration">
                <div className="envelope">
                  <div className="envelope-top"></div>
                  <div className="envelope-body">
                    <span>💌</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="section quick-answers-section">
        <div className="container">
          <div className="section-title">
            <h2>Quick Answers</h2>
            <p>
              Before reaching out, check if your question is answered in our FAQ!
            </p>
          </div>
          
          <div className="quick-links-grid">
            <a href="#/join" className="quick-link-card">
              <span className="quick-icon">👋</span>
              <h3>How to Join</h3>
              <p>Learn about membership and sign-up process</p>
            </a>
            <a href="#/workshops" className="quick-link-card">
              <span className="quick-icon">📚</span>
              <h3>Workshop Info</h3>
              <p>Details about our Python workshops</p>
            </a>
            <a href="#/about" className="quick-link-card">
              <span className="quick-icon">ℹ️</span>
              <h3>About Us</h3>
              <p>Learn more about our chapter's mission</p>
            </a>
          </div>
        </div>
      </section>

      {/* Response Time Notice */}
      <section className="response-notice">
        <div className="container">
          <div className="notice-content">
            <span className="notice-icon">⏰</span>
            <div>
              <h3>Response Time</h3>
              <p>
                We typically respond to messages within 2-3 school days. 
                For urgent matters, please speak with our faculty advisor directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Coding?</h2>
            <p>
              Don't wait! Join our chapter today and begin your journey in tech.
            </p>
            <Button href="#/join" variant="white" size="large">
              Join Girls Who Code
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact


