import React from 'react'

interface TextProps {
  className?: string
}

const Text: React.FC<TextProps> = ({ children, className }) => {
  return (
    <p className={className}>{children}</p>
  )
}

export default Text