import React from 'react';

export const BinaryScale: React.FC = () => {
  return (
    <div className="flex flex-col gap-1.5 mb-4">
      <div className="flex">
        {Array(4).fill(0).map((_, octet) => (
          <React.Fragment key={octet}>
            <div className="flex">
              {Array(8).fill(0).map((_, i) => (
                <div key={i} className="w-4 flex items-center justify-center">
                  <span className="text-[10px] font-mono text-gray-400">2<sup>{8-i}</sup></span>
                </div>
              ))}
            </div>
            {octet < 3 && <div className="w-4" />}
          </React.Fragment>
        ))}
      </div>
      <div className="flex">
        {Array(4).fill(0).map((_, octet) => (
          <React.Fragment key={octet}>
            <div className="flex">
              {Array(8).fill(0).map((_, i) => (
                <div key={i} className="w-4 flex items-center justify-center">
                  <span className="text-[10px] font-mono text-gray-400">{8-i}</span>
                </div>
              ))}
            </div>
            {octet < 3 && <div className="w-4" />}
          </React.Fragment>
        ))}
      </div>
      <div className="flex">
        {Array(4).fill(0).map((_, octet) => (
          <React.Fragment key={octet}>
            <div className="flex">
              {Array(8).fill(0).map((_, i) => (
                <div key={i} className="w-4 h-6 flex items-center justify-center">
                  <span className="text-[10px] font-mono text-gray-400">{Math.pow(2, 8-i)}</span>
                </div>
              ))}
            </div>
            {octet < 3 && <div className="w-4" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};