import Hero from '../components/Hero/Hero'
import Button from '../components/Button/Button'
import './About.css'

function About() {
  const values = [
    {
      icon: '🤝',
      title: 'Sisterhood',
      description: 'We support and uplift each other, creating a welcoming community where everyone belongs.'
    },
    {
      icon: '💪',
      title: 'Bravery',
      description: 'We embrace challenges and take risks, knowing that failure is part of learning.'
    },
    {
      icon: '🎯',
      title: 'Persistence',
      description: 'We keep trying until we succeed, never giving up on our coding goals.'
    },
    {
      icon: '✨',
      title: 'Creativity',
      description: 'We think outside the box and use technology to solve real-world problems.'
    }
  ]

  return (
    <div className="about">
      <Hero
        subtitle="About Our Chapter"
        title={<>Building the Next Generation of <span>Tech Leaders</span></>}
        description="Learn about our mission, values, and the impact we're making at Troy High School."
        showPattern={true}
      />

      {/* Mission Section */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-image">
              <div className="image-placeholder">
                <span className="placeholder-icon">👩‍💻</span>
                <span className="placeholder-text">Coding Together</span>
              </div>
            </div>
            <div className="mission-content">
              <span className="section-label">Our Mission</span>
              <h2>Empowering Girls Through Code</h2>
              <p>
                The Troy High School Girls Who Code chapter is dedicated to offering 
                <strong> free computer science education</strong> and programs designed 
                to support girls in learning to code and thriving in tech.
              </p>
              <p>
                Our chapter aligns with the national Girls Who Code mission to close 
                the gender gap in technology. We believe that every girl deserves the 
                opportunity to learn coding skills and explore careers in tech.
              </p>
              <p>
                Through our Python workshops and community activities, we create a 
                supportive environment where girls can learn, experiment, and grow 
                their technical skills together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Values</h2>
            <p>
              These principles guide everything we do at our chapter, 
              inspired by the Girls Who Code movement.
            </p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <span className="value-icon">{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GWC Connection */}
      <section className="section gwc-section">
        <div className="container">
          <div className="gwc-content">
            <div className="gwc-text">
              <span className="section-label">Part of Something Bigger</span>
              <h2>Connected to Girls Who Code</h2>
              <p>
                Our chapter is proudly affiliated with Girls Who Code, a national 
                nonprofit organization working to close the gender gap in technology. 
                Founded in 2012, Girls Who Code has reached over 500,000 girls through 
                its programs.
              </p>
              <p>
                By following the Girls Who Code curriculum and values, we ensure that 
                our members receive high-quality computer science education that 
                prepares them for future success in tech.
              </p>
              <Button 
                href="https://girlswhocode.com" 
                variant="primary"
              >
                Learn About GWC
              </Button>
            </div>
            <div className="gwc-stats">
              <div className="gwc-stat">
                <span className="stat-number">500K+</span>
                <span className="stat-label">Girls Reached by GWC</span>
              </div>
              <div className="gwc-stat">
                <span className="stat-number">8,500+</span>
                <span className="stat-label">Clubs Nationwide</span>
              </div>
              <div className="gwc-stat">
                <span className="stat-number">50</span>
                <span className="stat-label">States with Chapters</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Want to Be Part of Our Story?</h2>
            <p>
              Join our chapter and start your journey in computer science today!
            </p>
            <div className="cta-actions">
              <Button href="#/join" variant="primary" size="large">
                Join Our Chapter
              </Button>
              <Button href="#/contact" variant="secondary" size="large">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About


