import React from 'react';

interface TagProps {
  label: string;
}

const Tag: React.FC<TagProps> = ({ label }) => {
  return (
    <span className="inline-block border border-brutal-text px-2 sm:px-2 py-1 text-[10px] sm:text-xs transition-all hover:bg-brutal-text hover:text-brutal-bg cursor-crosshair">
      {label}
    </span>
  );
};

export default Tag;