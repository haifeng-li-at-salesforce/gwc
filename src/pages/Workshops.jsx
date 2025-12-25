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

  const eligibility = [
    {
      icon: '🎓',
      title: 'Troy High School Student',
      description: 'Must be a currently enrolled student at Troy High School'
    },
    {
      icon: '👩',
      title: 'Identify as a Girl',
      description: 'Open to all students who identify as girls or non-binary'
    },
    {
      icon: '💡',
      title: 'Interest in Tech',
      description: 'Curious about coding, technology, or computer science'
    },
    {
      icon: '🆓',
      title: 'No Experience Needed',
      description: 'Complete beginners are welcome and encouraged to join!'
    }
  ]

  const steps = [
    {
      number: '01',
      title: 'Fill Out the Form',
      description: 'Complete our simple sign-up form with your basic information.'
    },
    {
      number: '02',
      title: 'Get Confirmation',
      description: 'Receive a welcome email with details about our next meeting.'
    },
    {
      number: '03',
      title: 'Attend a Meeting',
      description: 'Come to your first meeting and meet the team!'
    },
    {
      number: '04',
      title: 'Start Coding',
      description: 'Begin your coding journey with our Python workshops.'
    }
  ]

  const faqs = [
    {
      question: 'Do I need to know how to code?',
      answer: 'Not at all! Our workshops are designed for complete beginners. We start from the very basics and build up your skills step by step.'
    },
    {
      question: 'Is there any cost to join?',
      answer: 'Absolutely not. Girls Who Code is completely free. There are no membership fees, no material costs, and no hidden charges.'
    },
    {
      question: 'What grade levels can join?',
      answer: 'We welcome students from all grade levels at Troy High School. Whether you\'re a freshman or a senior, you\'re welcome to join!'
    },
    {
      question: 'How often do you meet?',
      answer: 'We typically meet once a week during the school year. The specific day and time are announced at the beginning of each semester.'
    },
    {
      question: 'Do I need my own laptop?',
      answer: 'No, we have access to school computers. However, if you have a personal laptop, you\'re welcome to bring it.'
    },
    {
      question: 'Can I join mid-semester?',
      answer: 'Yes! While it\'s ideal to join at the beginning of a workshop series, we can help you catch up if you join later.'
    }
  ]

  return (
    <div className="workshops">
      <Hero
        subtitle="Python Workshops"
        title={<>Learn to Code with <span>Python</span></>}
        description="Our beginner-friendly Python workshops teach you programming fundamentals through hands-on projects and collaborative learning. Join for free!"
        primaryAction={{ label: 'Sign Up Now', href: 'https://forms.google.com' }}
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

      {/* Who Can Join */}
      <section className="section eligibility-section" id="join">
        <div className="container">
          <div className="section-title">
            <h2>Who Can Join?</h2>
            <p>
              Our chapter is open to all eligible students who are interested 
              in learning about technology and coding.
            </p>
          </div>
          
          <div className="eligibility-grid">
            {eligibility.map((item, index) => (
              <div key={index} className="eligibility-card">
                <span className="eligibility-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="section steps-section">
        <div className="container">
          <div className="section-title">
            <h2>How to Join</h2>
            <p>
              Getting started is easy! Follow these simple steps to become a member.
            </p>
          </div>
          
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="steps-cta">
            <Button 
              href="https://forms.google.com"
              variant="primary" 
              size="large"
            >
              Fill Out Sign-Up Form
            </Button>
            <p className="form-note">
              The form takes less than 2 minutes to complete
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>
              Got questions? We've got answers! Here are some common questions 
              about our workshops and joining.
            </p>
          </div>
          
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
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
              <Button href="https://forms.google.com" variant="white" size="large">
                Sign Up Now
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
