import Hero from '../components/Hero/Hero'
import Button from '../components/Button/Button'
import './Workshops.css'

function Workshops() {
  const curriculum = [
    {
      week: '1-2',
      title: 'Python Basics',
      topics: ['Variables & Data Types', 'Print Statements', 'User Input', 'Basic Operations']
    },
    {
      week: '3-4',
      title: 'Control Flow',
      topics: ['If/Else Statements', 'Comparison Operators', 'Logical Operators', 'Nested Conditions']
    },
    {
      week: '5-6',
      title: 'Loops & Iteration',
      topics: ['For Loops', 'While Loops', 'Range Function', 'Loop Control']
    },
    {
      week: '7-8',
      title: 'Functions',
      topics: ['Defining Functions', 'Parameters & Arguments', 'Return Values', 'Scope']
    },
    {
      week: '9-10',
      title: 'Data Structures',
      topics: ['Lists', 'Dictionaries', 'List Methods', 'Iteration over Collections']
    },
    {
      week: '11-12',
      title: 'Final Project',
      topics: ['Project Planning', 'Building Your App', 'Testing & Debugging', 'Presentation']
    }
  ]

  const highlights = [
    {
      icon: '🆓',
      title: 'Completely Free',
      description: 'All our workshops are 100% free. No hidden costs or materials to buy.'
    },
    {
      icon: '👋',
      title: 'Beginner Friendly',
      description: 'No prior coding experience required. We start from the very basics.'
    },
    {
      icon: '💻',
      title: 'Hands-On Learning',
      description: 'Learn by doing with interactive exercises and real coding projects.'
    },
    {
      icon: '👯',
      title: 'Peer Support',
      description: 'Work alongside other girls and help each other grow.'
    }
  ]

  return (
    <div className="workshops">
      <Hero
        subtitle="Python Workshops"
        title={<>Learn to Code with <span>Python</span></>}
        description="Our beginner-friendly Python workshops teach you programming fundamentals through hands-on projects and collaborative learning."
        primaryAction={{ label: 'Sign Up Now', href: '#/join' }}
      />

      {/* Workshop Highlights */}
      <section className="section highlights-section">
        <div className="container">
          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card">
                <span className="highlight-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Python */}
      <section className="section why-python">
        <div className="container">
          <div className="why-python-grid">
            <div className="why-python-content">
              <span className="section-label">Why Python?</span>
              <h2>The Perfect First Language</h2>
              <p>
                Python is one of the most popular and beginner-friendly programming 
                languages in the world. It's used by companies like Google, Netflix, 
                NASA, and Instagram.
              </p>
              <ul className="python-benefits">
                <li>
                  <span className="check">✓</span>
                  Easy to read and write - looks like English!
                </li>
                <li>
                  <span className="check">✓</span>
                  Used in web development, data science, AI, and more
                </li>
                <li>
                  <span className="check">✓</span>
                  Huge community and tons of learning resources
                </li>
                <li>
                  <span className="check">✓</span>
                  Great career opportunities in tech
                </li>
              </ul>
            </div>
            <div className="python-visual">
              <div className="code-example">
                <div className="code-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="filename">hello.py</span>
                </div>
                <pre className="code-content">
{`# Your first Python program!

name = input("What's your name? ")
print(f"Hello, {name}!")
print("Welcome to Girls Who Code!")

# It's that simple! 🎉`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section curriculum-section">
        <div className="container">
          <div className="section-title">
            <h2>Workshop Curriculum</h2>
            <p>
              Our 12-week Python fundamentals course covers everything 
              you need to start your coding journey.
            </p>
          </div>
          
          <div className="curriculum-timeline">
            {curriculum.map((module, index) => (
              <div key={index} className="curriculum-item">
                <div className="timeline-marker">
                  <span className="week-badge">Week {module.week}</span>
                </div>
                <div className="curriculum-content">
                  <h3>{module.title}</h3>
                  <ul>
                    {module.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Info */}
      <section className="section info-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <span className="info-icon">📅</span>
              <h3>When</h3>
              <p>Weekly sessions during the school year</p>
              <p className="info-detail">Check with us for current schedule</p>
            </div>
            <div className="info-card">
              <span className="info-icon">📍</span>
              <h3>Where</h3>
              <p>Troy High School</p>
              <p className="info-detail">Computer Lab (Room TBD)</p>
            </div>
            <div className="info-card">
              <span className="info-icon">💻</span>
              <h3>What to Bring</h3>
              <p>Just yourself!</p>
              <p className="info-detail">Computers provided, or bring your own laptop</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="workshop-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Coding?</h2>
            <p>
              No experience needed! Join our next Python workshop cohort and 
              begin your journey in tech.
            </p>
            <div className="cta-buttons">
              <Button href="#/join" variant="white" size="large">
                Join the Workshop
              </Button>
              <Button href="#/contact" variant="secondary" size="large">
                Ask Questions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Workshops


