import React from "react";
import clsx from "clsx";
type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ children, style, className }) => {
  return (
    <div
      className={clsx(
        "min-w-[30rem] max-w-[30rem] transition-all duration-500 p-16",
        "bg-secondary relative z-0 rounded-tl-md rounded-br-md rounded-tr-[80px] rounded-bl-[80px] text-center",
        "after:content-[''] after:-z-10 after:w-72 after:h-64 after:absolute after:-top-4 after:-left-16 after:bg-arabesco-right",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};
