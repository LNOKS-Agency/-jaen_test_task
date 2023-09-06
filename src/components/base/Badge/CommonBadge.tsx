import React from 'react';

export const CommonBadge: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div className="border border-base-100 px-1 bg-base-200 rounded-md py-[2px] text-neutral">
      {children}
    </div>
  );
};
