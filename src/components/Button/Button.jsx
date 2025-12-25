import './Button.css'

function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = ''
}) {
  const classes = `btn btn-${variant} btn-${size} ${className}`.trim()
  
  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:')
    return (
      <a 
        href={href}
        className={classes}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }
  
  return (
    <button 
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button


