import { Link } from 'react-router-dom'
import Hero from '../components/Hero/Hero'
import Button from '../components/Button/Button'
import './Home.css'

function Home() {
  const features = [
    {
      icon: '🐍',
      title: 'Python Workshops',
      description: 'Learn programming fundamentals through hands-on Python workshops designed for beginners.',
      link: '/workshops'
    },
    {
      icon: '👩‍💻',
      title: 'Supportive Community',
      description: 'Join a welcoming community of girls passionate about technology and coding.',
      link: '/about'
    },
    {
      icon: '🚀',
      title: 'Build Projects',
      description: 'Apply your skills by creating real projects and building your portfolio.',
      link: '/workshops'
    }
  ]

  const stats = [
    { number: '20+', label: 'Active Members' },
    { number: '10+', label: 'Workshops Held' },
    { number: '100%', label: 'Free to Join' }
  ]

  return (
    <div className="home">
      <Hero
        subtitle="Troy High School Chapter"
        title={<>Empowering Girls to <span>Code</span> & Thrive in Tech</>}
        description="Join our free computer science education programs and become part of a community that supports girls in learning to code and pursuing careers in technology."
        primaryAction={{ label: 'Join Us Today', href: '#/workshops' }}
        secondaryAction={{ label: 'Learn More', href: '#/about' }}
      />

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <div className="section-title">
            <h2>What We Offer</h2>
            <p>
              Our chapter provides free resources and programs to help girls develop 
              coding skills and confidence in technology.
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <Link to={feature.link} key={index} className="feature-card">
                <span className="feature-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <span className="feature-link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Preview */}
      <section className="mission-preview">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <span className="mission-label">Our Mission</span>
              <h2>Closing the Gender Gap in Tech</h2>
              <p>
                The Troy High School Girls Who Code chapter is dedicated to offering 
                free computer science education and programs designed to support girls 
                in learning to code and thriving in tech. We align with the national 
                Girls Who Code mission to close the gender gap in technology.
              </p>
              <Button href="#/about" variant="teal">
                About Our Chapter
              </Button>
            </div>
            <div className="mission-visual">
              <div className="code-block">
                <div className="code-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <pre className="code-content">
{`# Welcome to Girls Who Code!
def empower_girls():
    skills = ["Python", "Problem Solving",
              "Creativity", "Confidence"]
    
    for skill in skills:
        learn(skill)
        grow(skill)
    
    return "Future Tech Leader"

# Start your journey today!
empower_girls()`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Coding Journey?</h2>
            <p>
              No experience needed! Join our chapter and learn to code in a 
              supportive, fun environment.
            </p>
            <div className="cta-buttons">
              <Button href="#/workshops" variant="white" size="large">
                Join Our Chapter
              </Button>
              <Button href="#/contact" variant="secondary" size="large">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home


