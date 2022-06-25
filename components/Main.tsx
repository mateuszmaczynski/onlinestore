import React from "react";

interface MainProps {
    children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {
    return (
        <main className="max-w-7xl mx-auto w-full bg-blue-100 flex-grow">
            {children}
        </main>
    )
}