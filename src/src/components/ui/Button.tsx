import React from 'react';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <a
      {...props}
      className={`
        inline-block bg-brutal-text text-brutal-bg w-full sm:w-auto text-center
        px-4 sm:px-4 py-2.5 sm:py-2 font-bold uppercase text-xs sm:text-sm border-2 border-brutal-text 
        transition-all duration-200 cursor-pointer relative
        hover:bg-transparent hover:text-brutal-text 
        hover:-translate-y-0.5 hover:-translate-x-0.5 
        hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        active:translate-y-0 active:translate-x-0 active:shadow-none
        ${className}
      `}
    >
      {children}
    </a>
  );
};

export default Button;