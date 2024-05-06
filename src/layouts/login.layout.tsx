import React from 'react';

export const LoginLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="mx-auto flex h-screen w-screen justify-center bg-gray-900">
      <div className="h-127 w-127 my-auto flex flex-col p-2 md:flex-row">{children}</div>
    </div>
  );
};