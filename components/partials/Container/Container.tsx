import React from 'react'

interface ContainerProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export default function Container({ children, className, ...otherProps }: ContainerProps) {
  return (
    <div {...otherProps} className={`max-w-[1366px] px-10 mx-auto ${className ?? ''}`}>
      {children}
    </div>
  )
}
