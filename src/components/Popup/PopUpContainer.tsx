import React from 'react';
import { usePopup } from '../../context';

export const PopUpContainer: React.FC<{
  name: string
  children?: React.ReactNode
}> = ({ name, children }) => {
  const { closePopup } = usePopup().actions;

  const close = () => {
    closePopup({ name });
  };

  return (
    <div
      className="w-screen h-screen absolute flex  justify-center items-center pointer-events-auto"
    >
      <div onClick={close} className="absolute w-screen h-screen backdrop-blur" />
      <div>
        {children}
      </div>
    </div>
  );
};
