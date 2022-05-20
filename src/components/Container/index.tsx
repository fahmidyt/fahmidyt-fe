import React from "react";

interface ContainerProps {
  full?: boolean
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, full, className }) => {
  const width = full ? 'w-full' : 'sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1140px]'
  return (
    <main className={`relative mx-auto ${width} ${className ? className : ''}`}>
      {children}
    </main>
  );
};

export default Container;
