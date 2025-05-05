'use client'
import React from 'react'

import Navbar from "@/components/Navbar";
import Transition from "@/components/Effect/Transition";

const Layout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className="relative items-center justify-center  h-screen">
            <div className="items-center bg-transparent">
                <Navbar/>
            </div>
            <main>
                {children}
            </main>

        </div>
    )
}
export default Layout
