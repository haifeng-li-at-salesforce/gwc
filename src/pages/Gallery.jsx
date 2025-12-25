import { useState } from 'react'
import Hero from '../components/Hero/Hero'
import './Gallery.css'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  
  // Placeholder gallery items - these would be replaced with actual photos
  const galleryItems = [
    {
      id: 1,
      title: 'Workshop Session',
      description: 'Learning Python basics together',
      emoji: '💻',
      color: 'coral'
    },
    {
      id: 2,
      title: 'Coding Challenge',
      description: 'Working through a fun coding puzzle',
      emoji: '🧩',
      color: 'teal'
    },
    {
      id: 3,
      title: 'Team Collaboration',
      description: 'Pair programming in action',
      emoji: '👯',
      color: 'purple'
    },
    {
      id: 4,
      title: 'Project Demo',
      description: 'Presenting our Python projects',
      emoji: '🎤',
      color: 'mint'
    },
    {
      id: 5,
      title: 'Celebration',
      description: 'Celebrating our achievements',
      emoji: '🎉',
      color: 'yellow'
    },
    {
      id: 6,
      title: 'Learning Together',
      description: 'Group study session',
      emoji: '📚',
      color: 'coral'
    },
    {
      id: 7,
      title: 'Problem Solving',
      description: 'Debugging code as a team',
      emoji: '🔍',
      color: 'teal'
    },
    {
      id: 8,
      title: 'Creative Coding',
      description: 'Making art with Python',
      emoji: '🎨',
      color: 'purple'
    },
    {
      id: 9,
      title: 'Tech Talk',
      description: 'Guest speaker session',
      emoji: '🎙️',
      color: 'mint'
    }
  ]

  return (
    <div className="gallery">
      <Hero
        subtitle="Photo Gallery"
        title={<>Moments from Our <span>Chapter</span></>}
        description="Take a look at our workshops, events, and the amazing community we're building together."
      />

      {/* Gallery Grid */}
      <section className="section gallery-section">
        <div className="container">
          <div className="gallery-note">
            <p>
              📸 This is a placeholder gallery. Photos will be added as our 
              chapter hosts events and workshops!
            </p>
          </div>
          
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div 
                key={item.id}
                className={`gallery-item gallery-${item.color}`}
                onClick={() => setSelectedImage(item)}
              >
                <div className="gallery-placeholder">
                  <span className="gallery-emoji">{item.emoji}</span>
                </div>
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button 
              className="lightbox-close" 
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div className={`lightbox-image gallery-${selectedImage.color}`}>
              <span className="lightbox-emoji">{selectedImage.emoji}</span>
            </div>
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Upload CTA */}
      <section className="section upload-section">
        <div className="container">
          <div className="upload-card">
            <span className="upload-icon">📷</span>
            <h2>Have Photos to Share?</h2>
            <p>
              If you have photos from our events that you'd like to add to 
              the gallery, reach out to our leadership team!
            </p>
            <p className="upload-note">
              Note: All photos must be approved by participants before posting.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery


