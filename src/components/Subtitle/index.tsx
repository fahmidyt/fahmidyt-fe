import React from 'react'

interface SubtitleProps {
  className?: string
}

const Subtitle: React.FC<SubtitleProps> = ({ children, className }) => {
  return (
    <p className={`text-lg ${className ? className : ''}`}>{children}</p>
  )
}

export default Subtitle