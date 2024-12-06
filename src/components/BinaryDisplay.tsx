import React from 'react';

interface BinaryDisplayProps {
  value: number;
  highlight?: boolean;
  className?: string;
}

export const BinaryDisplay: React.FC<BinaryDisplayProps> = ({ 
  value, 
  highlight = false,
  className = ''
}) => {
  const binary = value.toString(2).padStart(8, '0');
  
  return (
    <div className={`flex gap-[1px] ${className}`}>
      {binary.split('').map((bit, i) => (
        <div
          key={i}
          className={`w-4 h-4 flex items-center justify-center text-[10px] font-mono
            ${highlight ? 'bg-blue-900 text-blue-200' : 'bg-gray-700 text-gray-300'}`}
        >
          {bit}
        </div>
      ))}
    </div>
  );
};