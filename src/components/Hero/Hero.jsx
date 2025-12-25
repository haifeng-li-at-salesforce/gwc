import Button from '../Button/Button'
import './Hero.css'

function Hero({ 
  title, 
  subtitle, 
  description,
  primaryAction,
  secondaryAction,
  variant = 'default',
  showPattern = true
}) {
  return (
    <section className={`hero hero-${variant}`}>
      {showPattern && (
        <div className="hero-pattern">
          <div className="pattern-circle pattern-1"></div>
          <div className="pattern-circle pattern-2"></div>
          <div className="pattern-circle pattern-3"></div>
          <div className="pattern-dots"></div>
        </div>
      )}
      
      <div className="container hero-container">
        <div className="hero-content">
          {subtitle && <span className="hero-subtitle">{subtitle}</span>}
          <h1 className="hero-title">{title}</h1>
          {description && <p className="hero-description">{description}</p>}
          
          {(primaryAction || secondaryAction) && (
            <div className="hero-actions">
              {primaryAction && (
                <Button 
                  href={primaryAction.href}
                  onClick={primaryAction.onClick}
                  variant="primary"
                  size="large"
                >
                  {primaryAction.label}
                </Button>
              )}
              {secondaryAction && (
                <Button 
                  href={secondaryAction.href}
                  onClick={secondaryAction.onClick}
                  variant="secondary"
                  size="large"
                >
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero


