import React from "react";

interface MainProps {
  children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className="max-w-7xl mx-auto w-full flex-grow border-2 border-blue-600">
      {children}
    </main>
  );
};
