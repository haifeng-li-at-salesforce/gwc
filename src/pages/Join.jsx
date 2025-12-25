import Hero from '../components/Hero/Hero'
import Button from '../components/Button/Button'
import './Join.css'

function Join() {
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
    <div className="join">
      <Hero
        subtitle="Join Our Chapter"
        title={<>Start Your <span>Coding Journey</span> Today</>}
        description="Become part of our supportive community and learn to code for free. No experience required!"
        primaryAction={{ 
          label: 'Sign Up Now', 
          href: 'https://forms.google.com' // Replace with actual form link
        }}
      />

      {/* Eligibility Section */}
      <section className="section eligibility-section">
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
              href="https://forms.google.com"  // Replace with actual form link
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
              about joining our chapter.
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

      {/* What You'll Get */}
      <section className="section benefits-section">
        <div className="container">
          <div className="benefits-card">
            <div className="benefits-content">
              <h2>What You'll Get</h2>
              <ul className="benefits-list">
                <li>
                  <span className="benefit-check">✓</span>
                  Free Python programming workshops
                </li>
                <li>
                  <span className="benefit-check">✓</span>
                  A supportive community of peers
                </li>
                <li>
                  <span className="benefit-check">✓</span>
                  Hands-on coding experience
                </li>
                <li>
                  <span className="benefit-check">✓</span>
                  Project-building opportunities
                </li>
                <li>
                  <span className="benefit-check">✓</span>
                  Connection to the national GWC community
                </li>
              </ul>
            </div>
            <div className="benefits-visual">
              <div className="benefits-emoji-grid">
                <span>💻</span>
                <span>🎯</span>
                <span>🚀</span>
                <span>🌟</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="join-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join?</h2>
            <p>
              Take the first step towards becoming a coder. 
              We can't wait to meet you!
            </p>
            <div className="cta-buttons">
              <Button 
                href="https://forms.google.com" // Replace with actual form link
                variant="white" 
                size="large"
              >
                Sign Up Now
              </Button>
              <Button href="#/contact" variant="secondary" size="large">
                Have Questions?
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Join


