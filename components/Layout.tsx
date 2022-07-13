import React from "react";
import {Footer} from "../components/Footer";
import {Header} from "../components/Header";

interface LayoutProps {
    children: React.ReactNode
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="flex-grow">
                {children}
            </div>
            <Footer />
        </div>
    )
}

