import Hero from '../components/Hero/Hero'
import Button from '../components/Button/Button'
import './Team.css'

function Team() {
  const leadership = [
    {
      name: 'Chapter President',
      role: 'President',
      description: 'Leads club meetings, coordinates with school administration, and drives our chapter\'s vision.',
      color: 'coral'
    },
    {
      name: 'Vice President',
      role: 'Vice President',
      description: 'Supports the president, helps organize events, and assists with workshop planning.',
      color: 'teal'
    },
    {
      name: 'Workshop Lead',
      role: 'Workshop Coordinator',
      description: 'Develops curriculum, leads Python workshops, and ensures everyone is learning.',
      color: 'purple'
    },
    {
      name: 'Outreach Lead',
      role: 'Outreach & Social Media',
      description: 'Manages social media, recruits new members, and spreads the word about GWC.',
      color: 'mint'
    }
  ]

  const getInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('').slice(0, 2)
  }

  return (
    <div className="team">
      <Hero
        subtitle="Meet Our Team"
        title={<>The Leaders Behind Our <span>Chapter</span></>}
        description="Our dedicated student leaders work together to create an amazing learning experience for everyone."
      />

      {/* Leadership Section */}
      <section className="section leadership-section">
        <div className="container">
          <div className="section-title">
            <h2>Chapter Leadership</h2>
            <p>
              Our leadership team is made up of passionate students who 
              volunteer their time to help others learn to code.
            </p>
          </div>
          
          <div className="leadership-grid">
            {leadership.map((member, index) => (
              <div key={index} className={`leader-card leader-${member.color}`}>
                <div className="leader-avatar">
                  <span>{getInitials(member.name)}</span>
                </div>
                <h3>{member.name}</h3>
                <span className="leader-role">{member.role}</span>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Advisor */}
      <section className="section advisor-section">
        <div className="container">
          <div className="advisor-card">
            <div className="advisor-content">
              <span className="section-label">Faculty Support</span>
              <h2>Faculty Advisor</h2>
              <p>
                Our chapter is supported by a dedicated faculty advisor who 
                provides guidance, helps secure resources, and ensures our 
                club activities align with school policies.
              </p>
              <p>
                We're grateful for the support of Troy High School's faculty 
                in making our chapter possible!
              </p>
            </div>
            <div className="advisor-visual">
              <div className="advisor-icon">
                <span>🎓</span>
              </div>
              <span className="advisor-label">THS Faculty Advisor</span>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="section join-team-section">
        <div className="container">
          <div className="join-team-content">
            <div className="join-team-text">
              <h2>Want to Join Our Team?</h2>
              <p>
                We're always looking for enthusiastic students who want to 
                help lead our chapter and make a difference!
              </p>
              <ul className="team-opportunities">
                <li>
                  <span className="opportunity-icon">📢</span>
                  <div>
                    <strong>Help with Outreach</strong>
                    <span>Spread the word about GWC at school</span>
                  </div>
                </li>
                <li>
                  <span className="opportunity-icon">🎨</span>
                  <div>
                    <strong>Design & Social Media</strong>
                    <span>Create graphics and manage our online presence</span>
                  </div>
                </li>
                <li>
                  <span className="opportunity-icon">🤝</span>
                  <div>
                    <strong>Peer Mentoring</strong>
                    <span>Help other members during workshops</span>
                  </div>
                </li>
                <li>
                  <span className="opportunity-icon">📸</span>
                  <div>
                    <strong>Event Documentation</strong>
                    <span>Capture photos and memories from our events</span>
                  </div>
                </li>
              </ul>
              <Button href="#/contact" variant="primary">
                Get Involved
              </Button>
            </div>
            <div className="join-team-visual">
              <div className="team-illustration">
                <div className="illustration-circle circle-1">👩‍💻</div>
                <div className="illustration-circle circle-2">💡</div>
                <div className="illustration-circle circle-3">🌟</div>
                <div className="illustration-circle circle-4">🚀</div>
                <div className="illustration-center">Team</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="team-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Meet Us in Person?</h2>
            <p>
              Come to one of our meetings and say hi! We'd love to meet you.
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

export default Team


